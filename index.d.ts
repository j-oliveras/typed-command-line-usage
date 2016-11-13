// Type definitions for command-line-usage v3.0.7
// Project: https://github.com/75lb/command-line-usage
// Definitions by: Jordi Oliveras Rovira <https://github.com/j-oliveras>

// https://github.com/75lb/command-line-args
import { ArgsOptions } from 'command-line-args';

// https://github.com/75lb/table-layout
import tableLayout = require('table-layout');

declare namespace commandLineUsage {
  /**
   * Re-export from "table-layout" ColumOptions type.
   */
  export type ColumnOptions = tableLayout.ColumnOptions;

  /**
   * Re-export from "table-layout" Options type.
   */
  export type TableOptions = tableLayout.Options;

  /**
   * The two field are optional, but one is required.
   *
   * These fields are the parameters to use table-layout.
   */
  export interface TableLayoutContent {
    /**
     * Options of layout.
     *
     * The two field are optional, but one is required.
     */
    options?: TableOptions;

    /**
     * For table layout, supply the content as an array of objects.
     * The property names of each object are not important, so long as
     * they are consistent throughout the array. Don't mix with strings.
     *
     * The two field are optional, but one is required.
     */
    data?: Array<any>;
  }

  export interface Content {
    /**
     * The section header, always bold and underlined.
     */
    header: string;

    /**
     * Content of the section.
     *
     * string: A single line of text.
     *
     * Array<string>: Multiple lines of text.
     *
     * Array<any>: Content as an array of objects.
     * The property names of each object are not important, so long as they are
     * consistent throughout the array.
     *
     * TableLayoutContent: No official documentation.
     * This are the parameters of table-layout.
     * @see https://github.com/75lb/command-line-usage/issues/7
     */
    content: string | Array<string> | Array<any> | TableLayoutContent;

    /**
     * Set to true to avoid indentation and wrapping. Useful for banners.
     */
    raw: boolean;
  }

  /**
   * Extended from "command-line-args" ArgsOptions type.
   */
  export interface UsageOptions extends ArgsOptions {
    /**
     * A string describing the option.
     */
    description?: string;

    /**
     * A string to replace the default type string (e.g. <string>).
     * It's often more useful to set a more descriptive type label,
     * like <ms>, <files>, <command> etc.
     */
    typeLabel?: string;
  }

  export interface OptionsList {
    /**
     * The section header, always bold and underlined.
     */
    header: string;

    /**
     * Options to print.
     */
    optionList?: Array<UsageOptions>;

    /**
     * If specified, only arguments from this particular group will be printed.
     */
    group?: string | Array<string>;

    /**
     * The names of one of more arguments definitions to hide from the option list.
     */
    hide?: string | Array<string>;
  }

  type Section = Content | OptionsList;
}

/**
 * Create an string with a usage guide.
 * @param sections One of more section objects (Content or OptionsList).
 */
declare function commandLineUsage(sections: commandLineUsage.Section | Array<commandLineUsage.Section>): string;

export = commandLineUsage;
