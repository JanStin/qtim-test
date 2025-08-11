<script setup lang="ts">
</script>

<template>
    <footer class="footer">
        <p>Is there a project?</p>
        <div class="footer__main">
            <p class="footer__big-text">Let’s work together</p>
            <div class="footer__addresses">
                <div class="footer__address">
                    <p>For all questions</p>
                    <a href="tel:+79202780068">+7 (920) 278—00—68</a>
                    <a href="mailto:qtim@agency.com">qtim@agency.com</a>
                </div>
                <div class="footer__address">
                    <p>Office in Russia</p>
                    <p>139 Ruben Station Lake Drew, NM 52678</p>
                    <a href="https://www.google.com/maps" target="_blank">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="32" rx="16" fill="#101010" />
                            <path
d="M17.5 20.5L20.5 11.5L11.5 14.5L15.25 16.75L17.5 20.5Z" stroke="#E2BEFF"
                                stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
                <div class="footer__address">
                    <p>Office in Dubai</p>
                    <p>139 Ruben Station Lake Drew, NM 52678</p>
                    <a href="https://www.google.com/maps" target="_blank">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="32" rx="16" fill="#101010" />
                            <path
d="M17.5 20.5L20.5 11.5L11.5 14.5L15.25 16.75L17.5 20.5Z" stroke="#E2BEFF"
                                stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="footer__socials">
            <a class="footer__social" href="https://www.google.com/maps" target="_blank">Facebook</a>
            <a class="footer__social" href="https://www.google.com/maps" target="_blank">Instagram</a>
            <a class="footer__social" href="https://www.google.com/maps" target="_blank">Telegram</a>
            <div class="footer__go">
                Go
            </div>
            <a class="footer__social" href="https://www.google.com/maps" target="_blank">Behance</a>
            <a class="footer__social" href="https://www.google.com/maps" target="_blank">Linkedn</a>
            <a class="footer__social" href="https://www.google.com/maps" target="_blank">Privacy Policy</a>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    padding: 140px 110px 0;
    background-color: #e2beff;

    &__main {
        display: grid;
        grid-template-columns: 70% 30%;
        padding: 55px 0 140px;
    }

    &__big-text {
        max-width: 510px;
        font-size: 112px;
        text-decoration: underline;
    }

    &__addresses {
        display: flex;
        flex-direction: column;
        gap: 35px;
        max-width: 160px;
    }

    &__address {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    &__socials {
        overflow: hidden;
        display: flex;
        align-items: center;
        gap: 32px;
        padding: 130px 0 30px;
    }

    &__social {
        text-decoration: underline;

        &:hover {
            opacity: 0.8;
        }
    }

    &__go {
        position: relative;
        z-index: 1;
        margin: 0 auto;
        font-size: 32px;
        line-height: 1;
        color: #fff;

        &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            z-index: -1;
            transform: translate(-50%, -100px);
            width: 360px;
            height: 360px;
            border-radius: 50%;
            background-color: #000;
        }
    }
}
</style>
