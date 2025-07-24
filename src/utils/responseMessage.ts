import { _httpStatusService } from "./_httpStatus";


export const _infoMessaage = {
    required: (value?: string) => {
        return `${value || 'This'} field is required`;
    },
};
