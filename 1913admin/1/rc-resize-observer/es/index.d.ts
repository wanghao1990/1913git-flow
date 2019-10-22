import * as React from 'react';
import ResizeObserver from 'resize-observer-polyfill';
interface ResizeObserverProps {
    children: React.ReactNode;
    disabled?: boolean;
    /** Trigger if element resized. Will always trigger when first time render. */
    onResize?: (size: {
        width: number;
        height: number;
    }) => void;
}
interface ResizeObserverState {
    height: number;
    width: number;
}
declare type RefNode = React.ReactInstance | HTMLElement | null;
declare class ReactResizeObserver extends React.Component<ResizeObserverProps, ResizeObserverState> {
    static displayName: string;
    resizeObserver: ResizeObserver | null;
    childNode: RefNode;
    currentElement: Element | null;
    state: {
        width: number;
        height: number;
    };
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    onComponentUpdated(): void;
    onResize: ResizeObserverCallback;
    destroyObserver(): void;
    render(): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | React.ReactElement<unknown, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>[] | null;
}
export default ReactResizeObserver;
