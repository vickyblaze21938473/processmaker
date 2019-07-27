---
description: >-
  Create a new ProcessMaker Environment Variable that can be re-used in any
  Process.
---

# Create a New Environment Variable

## Create a New ProcessMaker Environment Variable

{% hint style="info" %}
Your user account or group membership must have the following permissions to create a ProcessMaker Environment Variable:

* Environment Variables: View Environment Variables
* Environment Variables: Create Environment Variables

See the ProcessMaker [Environment Variable](../../../processmaker-administration/permission-descriptions-for-users-and-groups.md#environment-variables) permissions or ask your ProcessMaker Administrator for assistance.
{% endhint %}

Follow these steps to create a new ProcessMaker Environment Variable:

1. [View your ProcessMaker Environment Variables.](view-all-environment-variables.md) The **Environment Variables** page displays.
2. Click the **+Environment Variable** button. The **Create Environment Variable** page displays.  

   ![](../../../.gitbook/assets/create-environment-variable-screen-processes.png)

3. In the **Name** field, enter the unique name of the ProcessMaker Environment Variable. The ProcessMaker Environment Variable name can only contain letters, numbers, and dashes. This is a required field.
4. In the **Description** field, enter a description for the ProcessMaker Environment Variable. This is a required field.
5. Optionally, in the **Value** field, enter the value for the ProcessMaker Environment Variable. Entering a value is optional since ProcessMaker Environment Variables are secure, abstract proxies for sensitive information you assign to contain a value that can be determined during an in-progress Request.
6. Click **Save**. The screen closes and the following message displays: **The environment variable was created.** The **Environment Variables** page displays with your new ProcessMaker Environment Variable.

## Related Topics

{% page-ref page="../what-is-an-environment-variable.md" %}

{% page-ref page="view-all-environment-variables.md" %}

{% page-ref page="search-for-an-environment-variable.md" %}

{% page-ref page="edit-an-environmental-variable.md" %}

{% page-ref page="remove-an-environment-variable.md" %}
