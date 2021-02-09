import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, Col, Popover, Row, Checkbox, message } from "antd";
import { toast, Zoom } from "react-toastify";
import {
  moonbeamInit,
} from "../backend/MoonbeamWeb3";
import styles from './Header.module.css';

class EditPageSaveOption extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    markdown: PropTypes.string.isRequired,
    saveArticleContent: PropTypes.func.isRequired,
    resetContentEditStatus: PropTypes.func.isRequired,
    isUpdatingFinished: PropTypes.bool.isRequired,
    updatedPart: PropTypes.string,
    updateArticleStatusReset: PropTypes.func.isRequired,
    error: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]).isRequired
  };

  state = {
    visible: false
  };

  hidePopover = () => {
    this.setState({
      visible: false
    });
  };


  handleVisibleChange = visible => {
    this.setState({ visible });
  };

  handleSave = async () => {

    ////// await transactions Moonbeam
    const { id, markdown, saveArticleContent, resetContentEditStatus } = this.props;


      resetContentEditStatus();
      saveArticleContent(id, { markdown });


  };

  render() {

    const { error, isUpdatingFinished, updatedPart, updateArticleStatusReset } = this.props;

    if (isUpdatingFinished && error) {
      message.error('Failed to update article.');
    } else if (isUpdatingFinished) {
      if (updatedPart === 'content') {
        message.success('The content of article has been saved successfully.');
      } else if (updatedPart === 'info setting') {
        message.success('The info setting of article has been saved successfully.');
      }

      updateArticleStatusReset();
    }

    return (
      <Popover
        content={
          <EditPageSaveOptionContent
            hidePopover={this.hidePopover}
            {...this.props}
          />
        }
        title="Please choose the place you want to save"
        trigger={["click"]}
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
      >
        <Button
          htmlType="button"
          title="Save the markdown and it can be exported"
          onClick={this.handleSave}
        >
          Save
        </Button>
      </Popover>
    );
  }
}

class EditPageSaveOptionContent extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    hidePopover: PropTypes.func.isRequired,
    publishArticle: PropTypes.func.isRequired,
    saveArticleAsDraft: PropTypes.func.isRequired,
  };

  state = {
    isRedirected: true
  };

  toggleCheckbox = () => {
    this.setState((state) => ({
      isRedirected: !state.isRedirected
    }));
  };

  clickOnDraft = () => {
    const { id, saveArticleAsDraft, hidePopover } = this.props;

    saveArticleAsDraft(id);

    hidePopover();
  };

  clickOnPublish = async () => {

    const { id, publishArticle, hidePopover } = this.props;


    this.setState({
      confirmLoading: true,
    });
    ////////////////
    moonbeamInit.eth
    .getAccounts()
    .then((accounts) => {
      publishArticle(id);
      hidePopover();
      toast.dark(" 📑 Publish Article successfully ",  {
        position: "top-center",
        toastId: "TcenterA",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        textAlign: "center",
        transition: Zoom
        });
      console.log(accounts);
    }).catch((error) => {
      toast.dark("⛔️ You need to Run Moonbeam Node",  {
        position: "top-center",
        toastId: "Tcenter",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        textAlign: "center",
        transition: Zoom
        });
      console.log(error);
    });


  };

  render() {
    const PublishOption = this.state.isRedirected ? (
      <Col>
          <button
            className={styles.publishButton}
            onClick={this.clickOnPublish}
            title="After publishing in article list, you can find it in article list page."
          >
          <Link to="/articles"
          style={{color: "white"}}
          >Ready to publish</Link>
          </button>
      </Col>
    ) : (
      <Col>
        <button
          className={styles.publishButton}
          onClick={this.clickOnPublish}
          title="After publishing in article list, you can find it in article list page."
        >
          Ready to publish
        </button>
      </Col>
    );

    const DraftOption = this.state.isRedirected ? (
      <Col>
        <Link to="/drafts">
          <button
            className={styles.draftButton}
            onClick={this.clickOnDraft}
            title="After saving in draft list, you can find it in draft list page."
          >
            Save as draft
          </button>
        </Link>
      </Col>
    ) : (
      <Col>
        <button
          className={styles.draftButton}
          onClick={this.clickOnDraft}
          title="After saving in draft list, you can find it in draft list page."
        >
          Save as draft
        </button>
      </Col>
    );

    return (
      <div>
        <Row type="flex" justify="space-between" align="middle">
          {PublishOption}
          {DraftOption}
        </Row>
        <Row type="flex" justify="center" align="middle">
          <Col>
            <Checkbox defaultChecked={true} value={this.state.isRedirected} onChange={this.toggleCheckbox} className="let-blue">
              <span className="redirector" 
                      style={{
          color: "black",
        }}
              >Redirect to the relevant page later</span>
            </Checkbox>
          </Col>
        </Row>
      </div>
    );
  }
}

export { EditPageSaveOption };
