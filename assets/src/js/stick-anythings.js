import OW_Base from "./base/base";

class OW_StickAnythings extends OW_Base {
    getDefaultSettings() {
        return {
            selectors: {
                wpAdminbar: "#wpadminbar",
                topbar: "#top-bar-wrap",
                header: "#site-header",
            },
            options: oceanwpLocalize,
            topOffset: 0,
        };
    }

    getDefaultElements() {
        const selectors = this.getSettings("selectors");
        const options = this.getSettings("options");

        return {
            stickyElements: document.querySelectorAll(options.stickElements),
            $stickyElements: jQuery(options.stickElements),
            wpAdminbar: document.querySelector(selectors.wpAdminbar),
            topbar: document.querySelector(selectors.topbar),
            header: document.querySelector(selectors.header),
            body: document.body,
        };
    }

    onInit() {
        super.onInit();

        if (!!this.elements.stickyElements) {
            this.setElementTopOffset();
            this.initSticky();
        }
    }

    initSticky() {
        const settings = this.getSettings();
        const options = settings.options;
        const topOffset = settings.topOffset;

        console.log(topOffset);
        this.elements.$stickyElements.stick_in_parent({
            offset_top: topOffset,
        });

        if (!!options.unStick && window.innerWidth <= options.unStick) {
            this.elements.$stickyElements.trigger("sticky_kit:detach");
        }
    }

    setElementTopOffset() {
        this.addUserTopOffset();
        this.addWPAdminbarTopOffset();
        this.addTopbarTopOffset();
        this.addHeaderTopOffset();
    }

    addUserTopOffset() {
        const options = this.getSettings("options");
        const userTopOffset = Number.parseInt(options.isOffset);

        if (userTopOffset) {
            this.elements.body.setAttribute("data-offset", userTopOffset);

            this.setSettings({
                topOffset: userTopOffset,
            });
        }
    }

    addWPAdminbarTopOffset() {
        const currentTopOffset = this.getSettings("topOffset");

        if (!!this.elements.wpAdminbar && window.innerWidth > 600) {
            const wpAdminbarTopOffset = Number.parseInt(this.elements.wpAdminbar.offsetHeight);

            this.setSettings({
                topOffset: currentTopOffset + wpAdminbarTopOffset,
            });
        }
    }

    addTopbarTopOffset() {
        const settings = this.getSettings();
        const options = settings.options;
        const currentTopOffset = settings.topOffset;

        if (options.hasStickyTopBar) {
            const topbarTopOffset = Number.parseInt(this.elements.topbar.offsetHeight);

            this.setSettings({
                topOffset: currentTopOffset + topbarTopOffset,
            });
        }
    }

    addHeaderTopOffset() {
        const currentTopOffset = this.getSettings("topOffset");

        if (
            !this.elements.header.classList.contains("vertical-header") &&
            this.elements.header.classList.contains("fixed-scroll")
        ) {
            const headerTopOffset = Number.parseInt(this.elements.header.offsetHeight);

            this.setSettings({
                topOffset: currentTopOffset + headerTopOffset,
            });
        }
    }
}

new OW_StickAnythings();
