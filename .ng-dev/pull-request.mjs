/**
 * @type { import("@angular/ng-dev").PullRequestConfig }
 */
export const pullRequest = {
  githubApiMerge: {
    default: 'auto',
    labels: [{pattern: 'merge: squash commits', method: 'squash'}],
  },
  requiredStatuses: [],

  // Disable target labeling as we don't have release trains and version branches.
  __noTargetLabeling: true,
};
