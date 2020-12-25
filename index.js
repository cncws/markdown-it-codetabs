// Process ```lang [group]

'use strict';

module.exports = function (md, opts) {
    var defaultRender = md.renderer.rules.fence,
        unescapeAll = md.utils.unescapeAll;

    function getGroupName(token) {
        var info = token.info ? unescapeAll(token.info).trim() : '',
            groups = info.match(/\[[^\]]*\]/g);
        return groups ? groups[0] : null;
    }

    function getLabelName(token) {
        var info = token.info ? unescapeAll(token.info).trim() : '';
        return info ? info.split(/(\s+)/g)[0] : '';
    }

    function fenceGroup(tokens, idx, options, env, slf) {
        if (tokens[idx].hidden) { return ''; }

        var group = getGroupName(tokens[idx]);
        if (!group) {
            return defaultRender(tokens, idx, options, env, slf);
        }
        
        var token, langName, checked, labels = '', pres = '';
        for (let i = idx; i < tokens.length; i++) {
            token = tokens[i];
            if (getGroupName(token) !== group) { break; }
            token.hidden = true;

            langName  = getLabelName(token);
            checked = i - idx > 0 ? '' : ' checked';
            
            labels += `<li><input type="radio" name="label-group-${idx}"${checked}>` +
                `<label for="group-${idx}-tab-${i - idx}" onclick="this.previousElementSibling.click()">${langName}</label></li>\n`;
            pres += `<input type="radio" id="group-${idx}-tab-${i - idx}" name="group-${idx}"${checked}>\n` +
                defaultRender(tokens, i, options, env, slf);
        }
    
        return  '<div class="code-tabs">\n<ul>\n' + labels + '</ul>\n' + pres + '</div>';
    }

    md.renderer.rules.fence = fenceGroup;
};
