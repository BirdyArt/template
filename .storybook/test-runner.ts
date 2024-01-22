import { TestRunnerConfig, getStoryContext } from "@storybook/test-runner";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { checkA11y, configureAxe, injectAxe } from "axe-playwright";

const DEFAULT_VIEWPORT_SIZE = { width: 1920, height: 1080 };

const config: TestRunnerConfig = {
  async preVisit(page, story) {
    await injectAxe(page);
    const context = await getStoryContext(page, story);
    const viewportName = context.parameters?.viewport?.defaultViewport;
    const viewportParameter = MINIMAL_VIEWPORTS[viewportName];

    if (viewportParameter) {
      const viewportSize: any = Object.entries(
        viewportParameter.styles || {}
      ).reduce(
        (acc, [screen, size]) => ({
          ...acc,
          [screen]: parseInt(size),
        }),
        {}
      );

      page.setViewportSize(viewportSize);
    } else {
      page.setViewportSize(DEFAULT_VIEWPORT_SIZE);
    }
  },
  async postVisit(page, context) {
    // Get entire context of a story, including parameters, args, argTypes, etc.
    const storyContext = await getStoryContext(page, context);

    // Do not test a11y for stories that disable a11y
    if (storyContext.parameters?.a11y?.disable) {
      return;
    }

    // Apply story-level a11y rules
    await configureAxe(page, {
      rules: storyContext.parameters?.a11y?.config?.rules,
    });

    // in Storybook 6.x, the selector is #root
    await checkA11y(page, "#storybook-root", {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
      // pass axe options defined in @storybook/addon-a11y
      axeOptions: storyContext.parameters?.a11y?.options,
    });
  },
};
export default config;
