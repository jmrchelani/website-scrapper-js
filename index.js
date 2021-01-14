// index.js
const scrape = require('website-scraper');
const PuppeteerPlugin = require('website-scraper-puppeteer');
const path = require('path');

const domainxd = "google";
const weburl = "https://" + domainxd + ".com";

scrape({
    // Provide the URL(s) of the website(s) that you want to clone
    // In this example, you can clone the Our Code World website
    urls: [weburl],
    // Specify the path where the content should be saved
    // In this case, in the current directory inside the ourcodeworld dir
    directory: path.resolve(__dirname, domainxd),
    // Load the Puppeteer plugin
    plugins: [ 
        new PuppeteerPlugin({
            launchOptions: { 
                // If you set  this to true, the headless browser will show up on screen
                headless: true
            }, /* optional */
            scrollToBottom: {
                timeout: 10000, 
                viewportN: 10 
            } /* optional */
        })
    ]
});