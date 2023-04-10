/* Ref:
** https://discourse.julialang.org/t/use-javascript-library-with-documenter-jl/34984/8
*/
require.config({
    paths: {
        mermaid: "https://cdnjs.cloudflare.com/ajax/libs/mermaid/9.4.0/mermaid.min"
    }
});

require(['mermaid'], function (mermaid) {
    mermaid.initialize({
        startOnLoad : true,
        theme       : 'neutral',
        // themeVariables: {
        //     primaryColor: '#BB2528',
        //     primaryTextColor: '#fff',
        //     primaryBorderColor: '#7C0000',
        //     lineColor: '#F8B229',
        //     secondaryColor: '#006100',
        //     tertiaryColor: '#aaa',
        //     noteBorderColor: '#ff0',
        // }
    })
});