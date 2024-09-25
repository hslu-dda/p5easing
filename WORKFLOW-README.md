# Workflow: Managing p5-easing Versions with Fork and npm

This guide outlines the process for updating and publishing new versions of the p5-easing library using Fork as a Git GUI and npm for package management.

## Prerequisites

- Fork Git GUI installed
- npm installed
- p5-easing repository cloned locally

## Workflow Steps

1. **Make Code Changes**

   - Implement new features or bug fixes in your local repository.
   - Test your changes thoroughly.

2. **Update CHANGELOG.md**

   - Document your changes in the CHANGELOG.md file.
   - Follow the format:
     ```markdown
     ## [Unreleased]

     - Added new easing function: easeInOutBack
     - Fixed bug in easeElastic function
     ```

3. **Commit Changes**

   - Open Fork.
   - Stage all changed files.
   - Write a descriptive commit message.
   - Commit the changes.

4. **Create a New Version Tag**

   - In Fork, go to "Repository" > "Add Tag".
   - Name the tag using semantic versioning: `v[major].[minor].[patch]`
     (e.g., `v0.5.1`).
   - Add a description if desired.
   - Create the tag.

5. **Push Commits and Tag**

   - In Fork, push your commits to the remote repository.
   - Ensure you check "Push all tags" when pushing.

6. **Update npm Version**

   - Open a terminal in your project directory.
   - Run:
     ```
     npm version [new-version-number] --no-git-tag-version
     ```
     Replace `[new-version-number]` with your new version (e.g., `0.5.1`).
   - This updates the version in package.json without creating a git commit or tag.

7. **Commit Updated package.json**

   - In Fork, stage the updated package.json file.
   - Commit with the message "Bump version to [new-version-number]".
   - Push this commit.

8. **Publish to npm**

   - In the terminal, run:
     ```
     npm publish
     ```
   - This will publish the new version to npm.

9. **Verify Publication**
   - Check the npm website to ensure your new version is listed.
   - You can also run `npm info p5-easing` to see the latest version.

## Notes

- Always ensure your local repository is up-to-date before starting this process.
- Double-check your CHANGELOG.md and version numbers for consistency.
- If you're using GitHub Actions for automated publishing, ensure your workflow is configured to trigger on new tags.
