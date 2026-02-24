export const trackPage = (path: string) => {
    const win = window as Window & { gtag?: (command: string, id: string, params?: Record<string, unknown>) => void };
    if (win.gtag) {
        win.gtag('config', 'G-E85X44DQ6P', {
            page_path: path,
        });
    }
};
