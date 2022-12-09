/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
describe("FirstTest", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it("should have home screen", async () => {
    await expect(element(by.id("home"))).toBeVisible();
  });

  it("should show user screen after tap", async () => {
    await element(by.id("click-user")).tap();
    await expect(element(by.text("Tu es sur user"))).toBeVisible();
  });

  it("should go back on home", async () => {
    await element(by.id("click-back")).tap();
    await expect(element(by.text("Tu es sur home"))).toBeVisible();
  });

  it("should show settings screen after tap", async () => {
    await element(by.id("click-settings")).tap();
    await expect(element(by.text("Tu es sur settings"))).toBeVisible();
  });

  // eslint-disable-next-line jest/no-identical-title
  it("should go back on home", async () => {
    await element(by.id("click-back")).tap();
    await expect(element(by.text("Tu es sur home"))).toBeVisible();
  });
});
