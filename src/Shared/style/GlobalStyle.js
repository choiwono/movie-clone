import { createGlobalStyle } from 'styled-components';
import { color } from './shared/style/shared'

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Noto Sans KR', Helvetica, Arial, sans-serif !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 1rem;
        line-height: 1.5;
        color: #24292e;
        background-color: #fff;
        font-weight: 'normal';
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    }

    .app {
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    input.error {
        border-color: red;
    }

    .input-feedback {
        color: red;
        height: 5px;
        margin-top: -12px;
    }

    @mixin selected($bgColor, $color, $fontWeight) {
        background-color: $bgColor !important;
        color: $color !important;
        font-weight: $fontWeight !important;
    }

    .ant-menu-item-selected {
        @include selected(transparent, #006BCD, 700);

        @extend .ant-menu-item-selected;
        a {
            @extend .ant-menu-item-selected;
        }
    }

    .ant-menu-item {
         transition: font-weight .1s ease-in-out;

        a {
            color: #000000;
            font-size: 0.9rem;
            font-weight: 500;

            &:hover {
            font-weight: 700;
            color: #006BCD;
            }
        }

        &::after {
            border-right: 0px !important;
        }
    }

    .ant-select-selection--single {
        border-radius: 7.5px !important;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .ant-table-tbody>tr>td {
        border-bottom: 0px !important;
    }

    *:focus {
        outline: 0 !important;
    }

    .ant-calendar-picker-input.ant-input {
        border-radius: 7.5px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        text-indent: 0.5rem;

        &::placeholder {
            color: #808080;
        }
    }

    .custom-notification {
        border-radius: 50px !important;
        width: 500px;
        padding: 0px 30px !important;
        color: #ffffff !important;
        min-height: 55px !important;
        font-family: 'Noto Sans KR' !important;
        font-size: 1rem !important;
        transform: rotateY(360deg);
        transition: transform 0.6s;
        background: #1E1E1E !important;
    }

    .custom-notification.success {
        background: #2382DB !important;
    }

    .custom-notification.failure {
        background: #DB2E23 !important;
    }

    .Toastify__close-button {
        align-self: normal !important;
        color: #ffffff !important;
        opacity: 1 !important;
    }

    .search_list {
        position: absolute !important;
        width: 135px;
        text-align: center;
        transform-origin: 0px 113.2px;
        border: 1px solid #ddd;
        min-height: 200px;
        max-height: 200px;
        overflow-y: scroll;
        background: white;
        border: 1px solid rgb(222, 226, 230);
        border-radius: 5px;

        li {
            cursor: pointer;
            border: none !important;
        }
    }

    .ant-calendar-picker-input {
        background: #f6f6f6 !important;
        box-shadow: none !important;

        &:focus {
            border: 1.25px solid #6cb8ff !important;
        }
    }

    .filterSelect {
        width: 180px;
        margin-left: 10px !important;
        box-shadow: none;

        .ant-select-selection--single {
            box-shadow: none;
        }
    }

    .fade-enter {
        opacity: 0;
    }

    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 200ms ease-in;
    }

    .fade-exit {
        opacity: 1;
    }

    .fade-exit.fade-exit-active {
        opacity: 0;
        transition: opacity 200ms ease-in;
    }

    .bm-burger-button {
        position: fixed;
        width: 30px;
        height: 24px;
        right: 25px;
        top: 17.5px;
    }

    .bm-burger-bars {
        background: #fff;
    }

    .bm-burger-bars-hover {
        background: #a90000;
    }

    .bm-cross-button {
        height: 24px;
        width: 24px;
    }

    .bm-cross {
        background: #bdc3c7;
    }

    .bm-menu-wrap {
        position: fixed;
        height: 100%;
    }

    .bm-menu {
        background: #373a47;
        padding: 2.5em 1.5em 0;
        font-size: 1.15em;
    }

    .bm-morph-shape {
        fill: #373a47;
    }

    .bm-item-list {
        color: #b8b7ad;
        padding: 0.8em;
    }

    .bm-item {
        display: inline-block;
        padding: 10px;
        font-size: 18px;
        color: white;
    }

    .bm-overlay {
        background: rgba(0, 0, 0, 0.3);
    }
`

export default GlobalStyle;