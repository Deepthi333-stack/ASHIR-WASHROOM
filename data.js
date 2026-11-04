var APP_DATA = {
  "scenes": [
    {
      "id": "0-wet-area",
      "name": "WET AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.07555487514508918,
        "pitch": 0.07253475580300872,
        "fov": 1.3911794189911848
      },
      "linkHotspots": [
        {
          "yaw": 0.45324954183003996,
          "pitch": 0.33523359983610845,
          "rotation": 1.5707963267948966,
          "target": "1-dry-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dry-area",
      "name": "DRY AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.07059984426596522,
        "pitch": 0.007564469535415341,
        "fov": 1.3911794189911848
      },
      "linkHotspots": [
        {
          "yaw": -0.5193668626071055,
          "pitch": 0.276677615781459,
          "rotation": 4.71238898038469,
          "target": "0-wet-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "WASHROOM - ASHIR",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
