/**
 * Some explanation for this: As SVGs use masks and these masks use IDs so that other elements can reference that mask,
 * there is an issue in case an SVG is used more than once on a page as then the same ID will appear multiple times in the DOM.
 * Now, normally, the browser wouldn't care much about duplicate IDs as it will just find the first occurrence of the referenced ID.
 * However these references will no longer work if the first occurrence is currently hidden.
 * In order not to have duplicate IDs in the first place, we're live-patching the SVG with unique IDs, so that problem no longer occurs.
 *
 * Since SVG's can have nested elements looping through children recursively and applying the just explained paradigm to each attribute
 * that needs patching guarantees that nested elements have their unique IDs adjusted.
 *
 * @param svgRoot The SVG root element.
 */
export declare const patchSvgIds: (svgRoot: Element) => void;
