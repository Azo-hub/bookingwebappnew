{
    "version": 2,
        "public": true,
            "name": "test-universal",
                "rewrites": [
                    { "source": "/(.*)", "destination": "/api" }
                ],
                    "functions": {
        "api/index.js": {
            "includeFiles": "dist/bookingApp/browser/**"
        }
    }
}
