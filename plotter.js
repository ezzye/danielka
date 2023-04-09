$(document).ready(function() {

    // set up the sliders
    $('#a-slider').on('input', function() {
        var a = parseFloat($(this).val());
        $('#a-value').text(a);
        updatePlots();
    });

    $('#b-slider').on('input', function() {
        var b = parseFloat($(this).val());
        $('#b-value').text(b);
        updatePlots();
    });

    $('#c-slider').on('input', function() {
        var c = parseFloat($(this).val());
        $('#c-value').text(c);
        updatePlots();
    });

    $('#d-slider').on('input', function() {
        var d = parseFloat($(this).val());
        $('#d-value').text(d);
        updatePlots();
    });

    // update the plots
    function updatePlots() {
        // get the values of a, b, c, and d from the sliders
        var a = parseFloat($('#a-slider').val());
        var b = parseFloat($('#b-slider').val());
        var c = parseFloat($('#c-slider').val());
        var d = parseFloat($('#d-slider').val());

        // define the linear equations and the quadratic equation
        function linear1(x) {
            return a*x + c;
        }
        function linear2(x) {
            return b*x + d;
        }
        function quadratic(x) {
            return a*b*x*x + (b*c + a*d)*x + c*d;
        }

        // create a range of x values
        var x = Array.from({length: 101}, (_, i) => -5 + 0.1*i);

        // plot the linear equations and the quadratic equation
        var linear1_data = x.map(function(xi) {
            return [xi, linear1(xi)];
        });
        var linear2_data = x.map(function(xi) {
            return [xi, linear2(xi)];
        });
        var quadratic_data = x.map(function(xi) {
            return [xi, quadratic(xi)];
        });

        $.plot('#linear1-plot', [linear1_data], {
            colors: ['#f00'],
            series: {
                lines: {
                    show: true
                },
                points: {
                    show: false
                }
            },
            xaxis: {
                min: -5,
                max: 5
            },
            yaxis: {
                min: -15,
                max: 15
            }
        });

        $.plot('#linear2-plot', [linear2_data], {
            colors: ['#0f0'],
            series: {
                lines: {
                    show: true
                },
                points: {
                    show: false
                }
            },
            xaxis: {
                min: -5,
                max: 5
            },
            yaxis: {
                min: -15,
                max: 15
            }
        });

        $.plot('#quadratic-plot', [quadratic_data], {
            colors: ['#00f'],
            series: {
                lines: {
                    show: true
                },
                points: {
                    show: false
                }
            },
            xaxis: {
                min: -5,
                max: 5
            },
            yaxis: {
                min: -15,
                max: 15
            }
        });
    }

// initialize the plots
    updatePlots();
});