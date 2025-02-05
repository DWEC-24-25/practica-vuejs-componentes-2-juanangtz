const chromedriver = require("chromedriver");
module.exports = {
    "src_folders": ["test"],
    "test_settings" : {
        "default": {
            "skip_testcases_on_fail": false,
            "webdriver": {
                "start_process" : true,
                "server_path" : chromedriver.path,
                "cli_args": [
                    "--log", "debug"
                ],
                "port": 9515
            },
            "desiredCapabilities": {
                "browserName" : "chrome",
                "javascriptEnabled": true,
                "acceptSslCerts": true,
                "chromeOptions": {
                    "args": ["headless", "disable-gpu"]
                }
            }
        }
    }
}
