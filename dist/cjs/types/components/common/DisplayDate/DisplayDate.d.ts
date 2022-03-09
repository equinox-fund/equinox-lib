/// <reference types="react" />
import { TypographyProps } from '../Typography';
export interface DisplayDateProps {
    date: string;
    format?: 'timeTo' | 'date' | 'dateTime' | 'time';
    utc?: boolean;
    TypographyProps?: TypographyProps;
}
export declare const DATE_FORMAT = "D MMM, YYYY";
export declare const DATE_TIME_FORMAT = "D MMM YYYY, HH:mm";
export declare const TIME = "HH:mm";
declare const DisplayDate: React.FC<DisplayDateProps>;
export default DisplayDate;
