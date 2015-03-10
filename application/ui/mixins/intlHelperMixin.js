/* jshint globalstrict: true */
/* global navigator */
'use strict';

module.exports = {

    /**
     * Translate function that returns a message from the intl file.
     * The message returned is dependent on the language of the browser.
     * Defaults to en-us if the message doesn't exist for the current language.
     * If neither is found, the final portion of the path is returned
     *
     * @param  {string} path   The path of the message in the intl file
     * @return {string}        Translated message
     */
    t : function(path)
    {
        var message;
        var languages = this.props.locales || this.context.locales;

        // Iterate through each language to get a translated string
        for (var i in languages) {
            var lang = languages[i];

            message = this._getTranslatedMessage(lang, path);
            if (message) {
                return message;
            }
        }

        // check to see if en-us is part of the languages array.  If not, check for an english string
        if (!navigator.languages.indexOf('en-us') && !navigator.languages.indexOf('en-US')) {
            message = this._getTranslatedMessage('en-us', path);
            if (message) {
                return message;
            }
        }

        // if a message was not found, return the end of the path
        var pathParts = path.split('.');
        return pathParts[pathParts.length-1];
    },

    /**
     * Checks for a translation string using a specific locale and dot-namespaced identifier
     * Returns false if not found
     *
     * @param {string} lang Locale string ("en-US", etc)
     * @param {string} path Identifier ("test.My String")
     * @returns {boolean|string}
     */
    _getTranslatedMessage: function(lang, path)
    {
        var langPath  = lang.toLowerCase() + '.' + path;
        var pathParts = langPath.split('.');
        var messages  = this.props.messages || this.context.messages;
        try {
            return pathParts.reduce(function (obj, pathPart) {
                return obj[pathPart];
            }, messages);
        } catch(e) {
            return false;
        }
    }
};
