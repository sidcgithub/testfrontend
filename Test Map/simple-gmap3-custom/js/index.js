$("#map").gmap3({
    map: {
        options: {
            center: [45.521646, -73.575450],
            zoom: 12,
            disableDefaultUI: true,
            scrollwheel: true,

            styles: [{
                featureType: "",
                elementType: "",
                stylers: [{
                    saturation: -10
                }, {
                    hue: "#017bba"
                }, {
                    visibility: "simplified"
                }]
            }]
        }
    }
});