export function PreviewProvider({ children, initialData, isCreatingEntry, layout, modifiedData, slug, canUpdate, canCreate, getPreviewUrlParams, }: {
    children: any;
    initialData: any;
    isCreatingEntry: any;
    layout: any;
    modifiedData: any;
    slug: any;
    canUpdate: any;
    canCreate: any;
    getPreviewUrlParams?: (() => {}) | undefined;
}): JSX.Element;
export namespace PreviewProvider {
    namespace propTypes {
        const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const canUpdate: PropTypes.Validator<boolean>;
        const canCreate: PropTypes.Validator<boolean>;
        const initialData: PropTypes.Validator<object>;
        const isCreatingEntry: PropTypes.Validator<boolean>;
        const layout: PropTypes.Validator<object>;
        const modifiedData: PropTypes.Validator<object>;
        const slug: PropTypes.Validator<string>;
        const getPreviewUrlParams: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
export function usePreview(): any;
import PropTypes from "prop-types";
//# sourceMappingURL=index.d.ts.map