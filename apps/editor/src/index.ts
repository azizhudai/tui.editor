/**
 * @fileoverview entry point for editor
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */
import Editor from './editor';
import { renderDefaultUI } from './new/defaultUI';

import 'prosemirror-view/style/prosemirror.css';
import '@/css/editor.css';
import '@/css/contents.css';
import '@/css/preview-highlighting.css';
import '@/css/md-syntax-highlighting.css';

import './i18n/en-us';

export { Editor, renderDefaultUI };
