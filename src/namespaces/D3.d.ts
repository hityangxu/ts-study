/**
 * Created by yangxu on 16-10-25.
 */

declare namespace D3 {
    export interface Selector {
        select: {
            (selector: string): Selection;
            (element: EventTarget): Selection;
        }
    }

    export interface Event {
        x: number;
        y: number;
    }

    export interface Base extends Selector {
        event: Event;
    }
}

declare var d3: D3.Base;
