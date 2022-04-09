const core = require('@actions/core');
const slackifyMarkdown = require('slackify-markdown');

try {
    const md = core.getInput('text', {required: true});
    console.log("input");
    console.log(md);
    const mrkdwn = slackifyMarkdown(md);
    console.log("output");
    console.log(mrkdwn);
    core.setOutput("text", mrkdwn);
} catch (error) {
    core.setFailed(error.message);
}
