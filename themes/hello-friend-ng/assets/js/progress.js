$(document).ready(() => {
    var getMax = ()=>{
        return ($("article").height() + 300) - $(window).height();
    }

    var getValue = ()=> {
        return $(window).scrollTop();
    }

    if ('max' in document.createElement("progress")) {
        var progressBar = $("progress");
        progressBar.attr({ max: getMax() });
        
        $(document).on("scroll", () => {
            progressBar.attr({ value: getValue() });
        });

        $(window).resize(()=> {
            progressBar.attr({ max: getMax(), value: getValue() });
        });
    } else {
        var progressBar = $(".progress-bar"),
            max = getMax();
            value, width;

        var getWidth = ()=> {
            value = getValue();
            width = value/max * 100;
            width += "%";
            return width;
        }

        var setWidth = ()=> {
            progressBar.css({ width: getWidth() });
        }

        $(document).on("scroll", setWidth);
        $(window).on("resize", ()=> {
            // need to recalc max
            max = getMax();
            setWidth();
        });
    }
});