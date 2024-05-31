import React from 'react';
import styled, { css } from 'styled-components';

const Table = ({ scroll, children }) => {
    return (
        <TableWrap scroll={scroll}>
            <TableMain>{children}</TableMain>
        </TableWrap>
    );
};
export default Table;

const TableWrap = styled.div`
    overflow: hidden;
    border: 1px solid #333;
    border-width: 1px 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    ${(props) =>
        props.scroll === 'x' &&
        css`
            overflow-x: auto;
        `}
    ${(props) =>
        props.scroll === 'y' &&
        css`
            height: 100%;
            overflow-y: auto;
        `}
    caption {
        font-style: normal !important;
        font-variant-ligatures: normal !important;
        font-variant-caps: normal !important;
        line-height: 0 !important;
        color: transparent !important;
        text-shadow: none !important;
        background-color: transparent !important;
        border: 0 !important;
        z-index: -1;
        border: 0;
        width: 1px;
        height: 1px;
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        overflow: hidden;
        white-space: nowrap;
        display: inline-block;
        position: absolute;
    }
`;
const TableMain = styled.table`
    width: calc(100% + 2px);
    table-layout: fixed;
    margin: 0 -1px -1px;
    text-align: left;

    th,
    td {
        height: 40px;
        padding: 3px 15px;
        border: 1px solid #ccc;
        border-bottom: none;
        font-size: 14px;
        line-height: 1.5;
        vertical-align: middle;
        font-weight: 400;
        word-break: keep-all;
    }
    tr:first-child th,
    tr:first-child td {
        border-top: none;
    }
    th {
        text-align: center;
        background-color: #f9f9f9;
    }
    tbody tr:first-child td,
    tbody tr:first-child th {
        border-top: 1px solid #333;
    }
    .txt-algn-center {
        text-align: center;
    }
`;
