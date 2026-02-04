import app, { startApp } from "../server/index";

// For Vercel, we need to ensure the routes are registered
// This is handled by startApp which is calling registerRoutes
let isInitialized = false;

export default async function handler(req: any, res: any) {
    if (!isInitialized) {
        await startApp();
        isInitialized = true;
    }
    return app(req, res);
}
