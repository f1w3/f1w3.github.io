import {} from "hono";

type RedirectTime = {
    time: number;
    url: string;
};

type Head = {
    title?: string;
    redirectTime?: RedirectTime;
};

declare module "hono" {
    interface Env {
        // biome-ignore lint/complexity/noBannedTypes: <explanation>
        Variables: {};
        // biome-ignore lint/complexity/noBannedTypes: <explanation>
        Bindings: {};
    }
    interface ContextRenderer {
        // biome-ignore lint/style/useShorthandFunctionType: <explanation>
        (content: string | Promise<string>, head?: Head):
            | Response
            | Promise<Response>;
    }
}
