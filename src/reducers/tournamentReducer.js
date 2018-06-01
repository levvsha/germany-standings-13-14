import * as types from '../constants/TournamentConstants';
import _ from 'lodash';

/* eslint-disable quotes */
var data = {
  "name": "Deutsche Bundesliga 2013/14",
  "rounds": [
    {
      "name": "1. Spieltag",
      "matches": [
        {
          "date": "2013-08-09",
          "team1": {
            "key": "bayern",
            "name": "FC Bayern München",
            "code": "FCB"
          },
          "team2": {
            "key": "mgladbach",
            "name": "Borussia M'gladbach",
            "code": "BMG"
          },
          "score1": 3,
          "score2": 1
        },
        {
          "date": "2013-08-10",
          "team1": {
            "key": "leverkusen",
            "name": "Bayer 04 Leverkusen",
            "code": "B04"
          },
          "team2": {
            "key": "freiburg",
            "name": "SC Freiburg",
            "code": "SCF"
          },
          "score1": 3,
          "score2": 1
        },
        {
          "date": "2013-08-10",
          "team1": {
            "key": "hannover",
            "name": "Hannover 96",
            "code": "H96"
          },
          "team2": {
            "key": "wolfsburg",
            "name": "VfL Wolfsburg",
            "code": "WOB"
          },
          "score1": 2,
          "score2": 0
        },
        {
          "date": "2013-08-10",
          "team1": {
            "key": "hoffenheim",
            "name": "1899 Hoffenheim",
            "code": "HOF"
          },
          "team2": {
            "key": "nuernberg",
            "name": "1. FC Nürnberg",
            "code": "FCN"
          },
          "score1": 2,
          "score2": 2
        },
        {
          "date": "2013-08-10",
          "team1": {
            "key": "augsburg",
            "name": "FC Augsburg",
            "code": "FCA"
          },
          "team2": {
            "key": "dortmund",
            "name": "Borussia Dortmund",
            "code": "BVB"
          },
          "score1": 0,
          "score2": 4
        },
        {
          "date": "2013-08-10",
          "team1": {
            "key": "braunschweig",
            "name": "Eintr. Braunschweig",
            "code": "EBS"
          },
          "team2": {
            "key": "bremen",
            "name": "Werder Bremen",
            "code": "BRE"
          },
          "score1": 0,
          "score2": 1
        },
        {
          "date": "2013-08-10",
          "team1": {
            "key": "herthabsc",
            "name": "Hertha BSC",
            "code": "BSC"
          },
          "team2": {
            "key": "frankfurt",
            "name": "Eintracht Frankfurt",
            "code": "FFM"
          },
          "score1": 6,
          "score2": 1
        },
        {
          "date": "2013-08-11",
          "team1": {
            "key": "mainz",
            "name": "1. FSV Mainz 05",
            "code": "M05"
          },
          "team2": {
            "key": "stuttgart",
            "name": "Stuttgart",
            "code": "VFB"
          },
          "score1": 3,
          "score2": 2
        },
        {
          "date": "2013-08-11",
          "team1": {
            "key": "schalke",
            "name": "Schalke 04",
            "code": "S04"
          },
          "team2": {
            "key": "hsv",
            "name": "Hamburger SV",
            "code": "HSV"
          },
          "score1": 3,
          "score2": 3
        }
      ]
    },
    {
      "name": "2. Spieltag",
      "matches": [
        {
          "date": "2013-08-17",
          "team1": {
            "key": "mgladbach",
            "name": "Borussia M'gladbach",
            "code": "BMG"
          },
          "team2": {
            "key": "hannover",
            "name": "Hannover 96",
            "code": "H96"
          },
          "score1": 3,
          "score2": 0
        },
        {
          "date": "2013-08-17",
          "team1": {
            "key": "stuttgart",
            "name": "Stuttgart",
            "code": "VFB"
          },
          "team2": {
            "key": "leverkusen",
            "name": "Bayer 04 Leverkusen",
            "code": "B04"
          },
          "score1": 0,
          "score2": 1
        },
        {
          "date": "2013-08-17",
          "team1": {
            "key": "wolfsburg",
            "name": "VfL Wolfsburg",
            "code": "WOB"
          },
          "team2": {
            "key": "schalke",
            "name": "Schalke 04",
            "code": "S04"
          },
          "score1": 4,
          "score2": 0
        },
        {
          "date": "2013-08-17",
          "team1": {
            "key": "bremen",
            "name": "Werder Bremen",
            "code": "BRE"
          },
          "team2": {
            "key": "augsburg",
            "name": "FC Augsburg",
            "code": "FCA"
          },
          "score1": 1,
          "score2": 0
        },
        {
          "date": "2013-08-17",
          "team1": {
            "key": "freiburg",
            "name": "SC Freiburg",
            "code": "SCF"
          },
          "team2": {
            "key": "mainz",
            "name": "1. FSV Mainz 05",
            "code": "M05"
          },
          "score1": 1,
          "score2": 2
        },
        {
          "date": "2013-08-17",
          "team1": {
            "key": "hsv",
            "name": "Hamburger SV",
            "code": "HSV"
          },
          "team2": {
            "key": "hoffenheim",
            "name": "1899 Hoffenheim",
            "code": "HOF"
          },
          "score1": 1,
          "score2": 5
        },
        {
          "date": "2013-08-17",
          "team1": {
            "key": "frankfurt",
            "name": "Eintracht Frankfurt",
            "code": "FFM"
          },
          "team2": {
            "key": "bayern",
            "name": "FC Bayern München",
            "code": "FCB"
          },
          "score1": 0,
          "score2": 1
        },
        {
          "date": "2013-08-18",
          "team1": {
            "key": "nuernberg",
            "name": "1. FC Nürnberg",
            "code": "FCN"
          },
          "team2": {
            "key": "herthabsc",
            "name": "Hertha BSC",
            "code": "BSC"
          },
          "score1": 2,
          "score2": 2
        },
        {
          "date": "2013-08-18",
          "team1": {
            "key": "dortmund",
            "name": "Borussia Dortmund",
            "code": "BVB"
          },
          "team2": {
            "key": "braunschweig",
            "name": "Eintr. Braunschweig",
            "code": "EBS"
          },
          "score1": 2,
          "score2": 1
        }
      ]
    },
    {
      "name": "3. Spieltag",
      "matches": [
        {
          "date": "2013-08-23",
          "team1": {
            "key": "dortmund",
            "name": "Borussia Dortmund",
            "code": "BVB"
          },
          "team2": {
            "key": "bremen",
            "name": "Werder Bremen",
            "code": "BRE"
          },
          "score1": 1,
          "score2": 0
        },
        {
          "date": "2013-08-24",
          "team1": {
            "key": "bayern",
            "name": "FC Bayern München",
            "code": "FCB"
          },
          "team2": {
            "key": "nuernberg",
            "name": "1. FC Nürnberg",
            "code": "FCN"
          },
          "score1": 2,
          "score2": 0
        },
        {
          "date": "2013-08-24",
          "team1": {
            "key": "leverkusen",
            "name": "Bayer 04 Leverkusen",
            "code": "B04"
          },
          "team2": {
            "key": "mgladbach",
            "name": "Borussia M'gladbach",
            "code": "BMG"
          },
          "score1": 4,
          "score2": 2
        },
        {
          "date": "2013-08-24",
          "team1": {
            "key": "hannover",
            "name": "Hannover 96",
            "code": "H96"
          },
          "team2": {
            "key": "schalke",
            "name": "Schalke 04",
            "code": "S04"
          },
          "score1": 2,
          "score2": 1
        },
        {
          "date": "2013-08-24",
          "team1": {
            "key": "hoffenheim",
            "name": "1899 Hoffenheim",
            "code": "HOF"
          },
          "team2": {
            "key": "freiburg",
            "name": "SC Freiburg",
            "code": "SCF"
          },
          "score1": 3,
          "score2": 3
        },
        {
          "date": "2013-08-24",
          "team1": {
            "key": "mainz",
            "name": "1. FSV Mainz 05",
            "code": "M05"
          },
          "team2": {
            "key": "wolfsburg",
            "name": "VfL Wolfsburg",
            "code": "WOB"
          },
          "score1": 2,
          "score2": 0
        },
        {
          "date": "2013-08-24",
          "team1": {
            "key": "herthabsc",
            "name": "Hertha BSC",
            "code": "BSC"
          },
          "team2": {
            "key": "hsv",
            "name": "Hamburger SV",
            "code": "HSV"
          },
          "score1": 1,
          "score2": 0
        },
        {
          "date": "2013-08-25",
          "team1": {
            "key": "augsburg",
            "name": "FC Augsburg",
            "code": "FCA"
          },
          "team2": {
            "key": "stuttgart",
            "name": "Stuttgart",
            "code": "VFB"
          },
          "score1": 2,
          "score2": 1
        },
        {
          "date": "2013-08-25",
          "team1": {
            "key": "braunschweig",
            "name": "Eintr. Braunschweig",
            "code": "EBS"
          },
          "team2": {
            "key": "frankfurt",
            "name": "Eintracht Frankfurt",
            "code": "FFM"
          },
          "score1": 0,
          "score2": 2
        }
      ]
    },
    {
      "name": "4. Spieltag",
      "matches": [
        {
          "date": "2013-08-27",
          "team1": {
            "key": "freiburg",
            "name": "SC Freiburg",
            "code": "SCF"
          },
          "team2": {
            "key": "bayern",
            "name": "FC Bayern München",
            "code": "FCB"
          },
          "score1": 1,
          "score2": 1
        },
        {
          "date": "2013-08-31",
          "team1": {
            "key": "schalke",
            "name": "Schalke 04",
            "code": "S04"
          },
          "team2": {
            "key": "leverkusen",
            "name": "Bayer 04 Leverkusen",
            "code": "B04"
          },
          "score1": 2,
          "score2": 0
        },
        {
          "date": "2013-08-31",
          "team1": {
            "key": "mgladbach",
            "name": "Borussia M'gladbach",
            "code": "BMG"
          },
          "team2": {
            "key": "bremen",
            "name": "Werder Bremen",
            "code": "BRE"
          },
          "score1": 4,
          "score2": 1
        },
        {
          "date": "2013-08-31",
          "team1": {
            "key": "hannover",
            "name": "Hannover 96",
            "code": "H96"
          },
          "team2": {
            "key": "mainz",
            "name": "1. FSV Mainz 05",
            "code": "M05"
          },
          "score1": 4,
          "score2": 1
        },
        {
          "date": "2013-08-31",
          "team1": {
            "key": "wolfsburg",
            "name": "VfL Wolfsburg",
            "code": "WOB"
          },
          "team2": {
            "key": "herthabsc",
            "name": "Hertha BSC",
            "code": "BSC"
          },
          "score1": 2,
          "score2": 0
        },
        {
          "date": "2013-08-31",
          "team1": {
            "key": "nuernberg",
            "name": "1. FC Nürnberg",
            "code": "FCN"
          },
          "team2": {
            "key": "augsburg",
            "name": "FC Augsburg",
            "code": "FCA"
          },
          "score1": 0,
          "score2": 1
        },
        {
          "date": "2013-08-31",
          "team1": {
            "key": "hsv",
            "name": "Hamburger SV",
            "code": "HSV"
          },
          "team2": {
            "key": "braunschweig",
            "name": "Eintr. Braunschweig",
            "code": "EBS"
          },
          "score1": 4,
          "score2": 0
        },
        {
          "date": "2013-09-01",
          "team1": {
            "key": "stuttgart",
            "name": "Stuttgart",
            "code": "VFB"
          },
          "team2": {
            "key": "hoffenheim",
            "name": "1899 Hoffenheim",
            "code": "HOF"
          },
          "score1": 6,
          "score2": 2
        },
        {
          "date": "2013-09-01",
          "team1": {
            "key": "frankfurt",
            "name": "Eintracht Frankfurt",
            "code": "FFM"
          },
          "team2": {
            "key": "dortmund",
            "name": "Borussia Dortmund",
            "code": "BVB"
          },
          "score1": 1,
          "score2": 2
        }
      ]
    },
    {
      "name": "5. Spieltag",
      "matches": [
        {
          "date": "2013-09-13",
          "team1": {
            "key": "herthabsc",
            "name": "Hertha BSC",
            "code": "BSC"
          },
          "team2": {
            "key": "stuttgart",
            "name": "Stuttgart",
            "code": "VFB"
          },
          "score1": 0,
          "score2": 1
        },
        {
          "date": "2013-09-14",
          "team1": {
            "key": "dortmund",
            "name": "Borussia Dortmund",
            "code": "BVB"
          },
          "team2": {
            "key": "hsv",
            "name": "Hamburger SV",
            "code": "HSV"
          },
          "score1": 6,
          "score2": 2
        },
        {
          "date": "2013-09-14",
          "team1": {
            "key": "bayern",
            "name": "FC Bayern München",
            "code": "FCB"
          },
          "team2": {
            "key": "hannover",
            "name": "Hannover 96",
            "code": "H96"
          },
          "score1": 2,
          "score2": 0
        },
        {
          "date": "2013-09-14",
          "team1": {
            "key": "leverkusen",
            "name": "Bayer 04 Leverkusen",
            "code": "B04"
          },
          "team2": {
            "key": "wolfsburg",
            "name": "VfL Wolfsburg",
            "code": "WOB"
          },
          "score1": 3,
          "score2": 1
        },
        {
          "date": "2013-09-14",
          "team1": {
            "key": "bremen",
            "name": "Werder Bremen",
            "code": "BRE"
          },
          "team2": {
            "key": "frankfurt",
            "name": "Eintracht Frankfurt",
            "code": "FFM"
          },
          "score1": 0,
          "score2": 3
        },
        {
          "date": "2013-09-14",
          "team1": {
            "key": "mainz",
            "name": "1. FSV Mainz 05",
            "code": "M05"
          },
          "team2": {
            "key": "schalke",
            "name": "Schalke 04",
            "code": "S04"
          },
          "score1": 0,
          "score2": 1
        },
        {
          "date": "2013-09-14",
          "team1": {
            "key": "augsburg",
            "name": "FC Augsburg",
            "code": "FCA"
          },
          "team2": {
            "key": "freiburg",
            "name": "SC Freiburg",
            "code": "SCF"
          },
          "score1": 2,
          "score2": 1
        },
        {
          "date": "2013-09-15",
          "team1": {
            "key": "hoffenheim",
            "name": "1899 Hoffenheim",
            "code": "HOF"
          },
          "team2": {
            "key": "mgladbach",
            "name": "Borussia M'gladbach",
            "code": "BMG"
          },
          "score1": 2,
          "score2": 1
        },
        {
          "date": "2013-09-15",
          "team1": {
            "key": "braunschweig",
            "name": "Eintr. Braunschweig",
            "code": "EBS"
          },
          "team2": {
            "key": "nuernberg",
            "name": "1. FC Nürnberg",
            "code": "FCN"
          },
          "score1": 1,
          "score2": 1
        }
      ]
    },
    {
      "name": "6. Spieltag",
      "matches": [
        {
          "date": "2013-09-20",
          "team1": {
            "key": "mgladbach",
            "name": "Borussia M'gladbach",
            "code": "BMG"
          },
          "team2": {
            "key": "braunschweig",
            "name": "Eintr. Braunschweig",
            "code": "EBS"
          },
          "score1": 4,
          "score2": 1
        },
        {
          "date": "2013-09-21",
          "team1": {
            "key": "schalke",
            "name": "Schalke 04",
            "code": "S04"
          },
          "team2": {
            "key": "bayern",
            "name": "FC Bayern München",
            "code": "FCB"
          },
          "score1": 0,
          "score2": 4
        },
        {
          "date": "2013-09-21",
          "team1": {
            "key": "hannover",
            "name": "Hannover 96",
            "code": "H96"
          },
          "team2": {
            "key": "augsburg",
            "name": "FC Augsburg",
            "code": "FCA"
          },
          "score1": 2,
          "score2": 1
        },
        {
          "date": "2013-09-21",
          "team1": {
            "key": "wolfsburg",
            "name": "VfL Wolfsburg",
            "code": "WOB"
          },
          "team2": {
            "key": "hoffenheim",
            "name": "1899 Hoffenheim",
            "code": "HOF"
          },
          "score1": 2,
          "score2": 1
        },
        {
          "date": "2013-09-21",
          "team1": {
            "key": "nuernberg",
            "name": "1. FC Nürnberg",
            "code": "FCN"
          },
          "team2": {
            "key": "dortmund",
            "name": "Borussia Dortmund",
            "code": "BVB"
          },
          "score1": 1,
          "score2": 1
        },
        {
          "date": "2013-09-21",
          "team1": {
            "key": "mainz",
            "name": "1. FSV Mainz 05",
            "code": "M05"
          },
          "team2": {
            "key": "leverkusen",
            "name": "Bayer 04 Leverkusen",
            "code": "B04"
          },
          "score1": 1,
          "score2": 4
        },
        {
          "date": "2013-09-21",
          "team1": {
            "key": "hsv",
            "name": "Hamburger SV",
            "code": "HSV"
          },
          "team2": {
            "key": "bremen",
            "name": "Werder Bremen",
            "code": "BRE"
          },
          "score1": 0,
          "score2": 2
        },
        {
          "date": "2013-09-22",
          "team1": {
            "key": "freiburg",
            "name": "SC Freiburg",
            "code": "SCF"
          },
          "team2": {
            "key": "herthabsc",
            "name": "Hertha BSC",
            "code": "BSC"
          },
          "score1": 1,
          "score2": 1
        },
        {
          "date": "2013-09-22",
          "team1": {
            "key": "stuttgart",
            "name": "Stuttgart",
            "code": "VFB"
          },
          "team2": {
            "key": "frankfurt",
            "name": "Eintracht Frankfurt",
            "code": "FFM"
          },
          "score1": 1,
          "score2": 1
        }
      ]
    },
    {
      "name": "7. Spieltag",
      "matches": [
        {
          "date": "2013-09-27",
          "team1": {
            "key": "augsburg",
            "name": "FC Augsburg",
            "code": "FCA"
          },
          "team2": {
            "key": "mgladbach",
            "name": "Borussia M'gladbach",
            "code": "BMG"
          },
          "score1": 2,
          "score2": 2
        },
        {
          "date": "2013-09-28",
          "team1": {
            "key": "dortmund",
            "name": "Borussia Dortmund",
            "code": "BVB"
          },
          "team2": {
            "key": "freiburg",
            "name": "SC Freiburg",
            "code": "SCF"
          },
          "score1": 5,
          "score2": 0
        },
        {
          "date": "2013-09-28",
          "team1": {
            "key": "bayern",
            "name": "FC Bayern München",
            "code": "FCB"
          },
          "team2": {
            "key": "wolfsburg",
            "name": "VfL Wolfsburg",
            "code": "WOB"
          },
          "score1": 1,
          "score2": 0
        },
        {
          "date": "2013-09-28",
          "team1": {
            "key": "leverkusen",
            "name": "Bayer 04 Leverkusen",
            "code": "B04"
          },
          "team2": {
            "key": "hannover",
            "name": "Hannover 96",
            "code": "H96"
          },
          "score1": 2,
          "score2": 0
        },
        {
          "date": "2013-09-28",
          "team1": {
            "key": "hoffenheim",
            "name": "1899 Hoffenheim",
            "code": "HOF"
          },
          "team2": {
            "key": "schalke",
            "name": "Schalke 04",
            "code": "S04"
          },
          "score1": 3,
          "score2": 3
        },
        {
          "date": "2013-09-28",
          "team1": {
            "key": "frankfurt",
            "name": "Eintracht Frankfurt",
            "code": "FFM"
          },
          "team2": {
            "key": "hsv",
            "name": "Hamburger SV",
            "code": "HSV"
          },
          "score1": 2,
          "score2": 2
        },
        {
          "date": "2013-09-28",
          "team1": {
            "key": "herthabsc",
            "name": "Hertha BSC",
            "code": "BSC"
          },
          "team2": {
            "key": "mainz",
            "name": "1. FSV Mainz 05",
            "code": "M05"
          },
          "score1": 3,
          "score2": 1
        },
        {
          "date": "2013-09-29",
          "team1": {
            "key": "bremen",
            "name": "Werder Bremen",
            "code": "BRE"
          },
          "team2": {
            "key": "nuernberg",
            "name": "1. FC Nürnberg",
            "code": "FCN"
          },
          "score1": 3,
          "score2": 3
        },
        {
          "date": "2013-09-29",
          "team1": {
            "key": "braunschweig",
            "name": "Eintr. Braunschweig",
            "code": "EBS"
          },
          "team2": {
            "key": "stuttgart",
            "name": "Stuttgart",
            "code": "VFB"
          },
          "score1": 0,
          "score2": 4
        }
      ]
    },
    {
      "name": "8. Spieltag",
      "matches": [
        {
          "date": "2013-10-04",
          "team1": {
            "key": "hannover",
            "name": "Hannover 96",
            "code": "H96"
          },
          "team2": {
            "key": "herthabsc",
            "name": "Hertha BSC",
            "code": "BSC"
          },
          "score1": 1,
          "score2": 1
        },
        {
          "date": "2013-10-05",
          "team1": {
            "key": "schalke",
            "name": "Schalke 04",
            "code": "S04"
          },
          "team2": {
            "key": "augsburg",
            "name": "FC Augsburg",
            "code": "FCA"
          },
          "score1": 4,
          "score2": 1
        },
        {
          "date": "2013-10-05",
          "team1": {
            "key": "mgladbach",
            "name": "Borussia M'gladbach",
            "code": "BMG"
          },
          "team2": {
            "key": "dortmund",
            "name": "Borussia Dortmund",
            "code": "BVB"
          },
          "score1": 2,
          "score2": 0
        },
        {
          "date": "2013-10-05",
          "team1": {
            "key": "leverkusen",
            "name": "Bayer 04 Leverkusen",
            "code": "B04"
          },
          "team2": {
            "key": "bayern",
            "name": "FC Bayern München",
            "code": "FCB"
          },
          "score1": 1,
          "score2": 1
        },
        {
          "date": "2013-10-05",
          "team1": {
            "key": "stuttgart",
            "name": "Stuttgart",
            "code": "VFB"
          },
          "team2": {
            "key": "bremen",
            "name": "Werder Bremen",
            "code": "BRE"
          },
          "score1": 1,
          "score2": 1
        },
        {
          "date": "2013-10-05",
          "team1": {
            "key": "wolfsburg",
            "name": "VfL Wolfsburg",
            "code": "WOB"
          },
          "team2": {
            "key": "braunschweig",
            "name": "Eintr. Braunschweig",
            "code": "EBS"
          },
          "score1": 0,
          "score2": 2
        },
        {
          "date": "2013-10-05",
          "team1": {
            "key": "mainz",
            "name": "1. FSV Mainz 05",
            "code": "M05"
          },
          "team2": {
            "key": "hoffenheim",
            "name": "1899 Hoffenheim",
            "code": "HOF"
          },
          "score1": 2,
          "score2": 2
        },
        {
          "date": "2013-10-06",
          "team1": {
            "key": "nuernberg",
            "name": "1. FC Nürnberg",
            "code": "FCN"
          },
          "team2": {
            "key": "hsv",
            "name": "Hamburger SV",
            "code": "HSV"
          },
          "score1": 0,
          "score2": 5
        },
        {
          "date": "2013-10-06",
          "team1": {
            "key": "freiburg",
            "name": "SC Freiburg",
            "code": "SCF"
          },
          "team2": {
            "key": "frankfurt",
            "name": "Eintracht Frankfurt",
            "code": "FFM"
          },
          "score1": 1,
          "score2": 1
        }
      ]
    },
    {
      "name": "9. Spieltag",
      "matches": [
        {
          "date": "2013-10-18",
          "team1": {
            "key": "hoffenheim",
            "name": "1899 Hoffenheim",
            "code": "HOF"
          },
          "team2": {
            "key": "leverkusen",
            "name": "Bayer 04 Leverkusen",
            "code": "B04"
          },
          "score1": 1,
          "score2": 2
        },
        {
          "date": "2013-10-19",
          "team1": {
            "key": "dortmund",
            "name": "Borussia Dortmund",
            "code": "BVB"
          },
          "team2": {
            "key": "hannover",
            "name": "Hannover 96",
            "code": "H96"
          },
          "score1": 1,
          "score2": 0
        },
        {
          "date": "2013-10-19",
          "team1": {
            "key": "bayern",
            "name": "FC Bayern München",
            "code": "FCB"
          },
          "team2": {
            "key": "mainz",
            "name": "1. FSV Mainz 05",
            "code": "M05"
          },
          "score1": 4,
          "score2": 1
        },
        {
          "date": "2013-10-19",
          "team1": {
            "key": "bremen",
            "name": "Werder Bremen",
            "code": "BRE"
          },
          "team2": {
            "key": "freiburg",
            "name": "SC Freiburg",
            "code": "SCF"
          },
          "score1": 0,
          "score2": 0
        },
        {
          "date": "2013-10-19",
          "team1": {
            "key": "braunschweig",
            "name": "Eintr. Braunschweig",
            "code": "EBS"
          },
          "team2": {
            "key": "schalke",
            "name": "Schalke 04",
            "code": "S04"
          },
          "score1": 2,
          "score2": 3
        },
        {
          "date": "2013-10-19",
          "team1": {
            "key": "frankfurt",
            "name": "Eintracht Frankfurt",
            "code": "FFM"
          },
          "team2": {
            "key": "nuernberg",
            "name": "1. FC Nürnberg",
            "code": "FCN"
          },
          "score1": 1,
          "score2": 1
        },
        {
          "date": "2013-10-19",
          "team1": {
            "key": "herthabsc",
            "name": "Hertha BSC",
            "code": "BSC"
          },
          "team2": {
            "key": "mgladbach",
            "name": "Borussia M'gladbach",
            "code": "BMG"
          },
          "score1": 1,
          "score2": 0
        },
        {
          "date": "2013-10-20",
          "team1": {
            "key": "hsv",
            "name": "Hamburger SV",
            "code": "HSV"
          },
          "team2": {
            "key": "stuttgart",
            "name": "Stuttgart",
            "code": "VFB"
          },
          "score1": 3,
          "score2": 3
        },
        {
          "date": "2013-10-20",
          "team1": {
            "key": "augsburg",
            "name": "FC Augsburg",
            "code": "FCA"
          },
          "team2": {
            "key": "wolfsburg",
            "name": "VfL Wolfsburg",
            "code": "WOB"
          },
          "score1": 1,
          "score2": 2
        }
      ]
    },
    {
      "name": "10. Spieltag",
      "matches": [
        {
          "date": "2013-10-25",
          "team1": {
            "key": "stuttgart",
            "name": "Stuttgart",
            "code": "VFB"
          },
          "team2": {
            "key": "nuernberg",
            "name": "1. FC Nürnberg",
            "code": "FCN"
          },
          "score1": 1,
          "score2": 1
        },
        {
          "date": "2013-10-26",
          "team1": {
            "key": "bayern",
            "name": "FC Bayern München",
            "code": "FCB"
          },
          "team2": {
            "key": "herthabsc",
            "name": "Hertha BSC",
            "code": "BSC"
          },
          "score1": 3,
          "score2": 2
        },
        {
          "date": "2013-10-26",
          "team1": {
            "key": "schalke",
            "name": "Schalke 04",
            "code": "S04"
          },
          "team2": {
            "key": "dortmund",
            "name": "Borussia Dortmund",
            "code": "BVB"
          },
          "score1": 1,
          "score2": 3
        },
        {
          "date": "2013-10-26",
          "team1": {
            "key": "leverkusen",
            "name": "Bayer 04 Leverkusen",
            "code": "B04"
          },
          "team2": {
            "key": "augsburg",
            "name": "FC Augsburg",
            "code": "FCA"
          },
          "score1": 2,
          "score2": 1
        },
        {
          "date": "2013-10-26",
          "team1": {
            "key": "hannover",
            "name": "Hannover 96",
            "code": "H96"
          },
          "team2": {
            "key": "hoffenheim",
            "name": "1899 Hoffenheim",
            "code": "HOF"
          },
          "score1": 1,
          "score2": 4
        },
        {
          "date": "2013-10-26",
          "team1": {
            "key": "wolfsburg",
            "name": "VfL Wolfsburg",
            "code": "WOB"
          },
          "team2": {
            "key": "bremen",
            "name": "Werder Bremen",
            "code": "BRE"
          },
          "score1": 3,
          "score2": 0
        },
        {
          "date": "2013-10-26",
          "team1": {
            "key": "mainz",
            "name": "1. FSV Mainz 05",
            "code": "M05"
          },
          "team2": {
            "key": "braunschweig",
            "name": "Eintr. Braunschweig",
            "code": "EBS"
          },
          "score1": 2,
          "score2": 0
        },
        {
          "date": "2013-10-27",
          "team1": {
            "key": "freiburg",
            "name": "SC Freiburg",
            "code": "SCF"
          },
          "team2": {
            "key": "hsv",
            "name": "Hamburger SV",
            "code": "HSV"
          },
          "score1": 0,
          "score2": 3
        },
        {
          "date": "2013-10-27",
          "team1": {
            "key": "mgladbach",
            "name": "Borussia M'gladbach",
            "code": "BMG"
          },
          "team2": {
            "key": "frankfurt",
            "name": "Eintracht Frankfurt",
            "code": "FFM"
          },
          "score1": 4,
          "score2": 1
        }
      ]
    },
    {
      "name": "11. Spieltag",
      "matches": [
        {
          "date": "2013-11-01",
          "team1": {
            "key": "dortmund",
            "name": "Borussia Dortmund",
            "code": "BVB"
          },
          "team2": {
            "key": "stuttgart",
            "name": "Stuttgart",
            "code": "VFB"
          },
          "score1": 6,
          "score2": 1
        },
        {
          "date": "2013-11-02",
          "team1": {
            "key": "nuernberg",
            "name": "1. FC Nürnberg",
            "code": "FCN"
          },
          "team2": {
            "key": "freiburg",
            "name": "SC Freiburg",
            "code": "SCF"
          },
          "score1": 0,
          "score2": 3
        },
        {
          "date": "2013-11-02",
          "team1": {
            "key": "hoffenheim",
            "name": "1899 Hoffenheim",
            "code": "HOF"
          },
          "team2": {
            "key": "bayern",
            "name": "FC Bayern München",
            "code": "FCB"
          },
          "score1": 1,
          "score2": 2
        },
        {
          "date": "2013-11-02",
          "team1": {
            "key": "hsv",
            "name": "Hamburger SV",
            "code": "HSV"
          },
          "team2": {
            "key": "mgladbach",
            "name": "Borussia M'gladbach",
            "code": "BMG"
          },
          "score1": 0,
          "score2": 3
        },
        {
          "date": "2013-11-02",
          "team1": {
            "key": "braunschweig",
            "name": "Eintr. Braunschweig",
            "code": "EBS"
          },
          "team2": {
            "key": "leverkusen",
            "name": "Bayer 04 Leverkusen",
            "code": "B04"
          },
          "score1": 1,
          "score2": 0
        },
        {
          "date": "2013-11-02",
          "team1": {
            "key": "frankfurt",
            "name": "Eintracht Frankfurt",
            "code": "FFM"
          },
          "team2": {
            "key": "wolfsburg",
            "name": "VfL Wolfsburg",
            "code": "WOB"
          },
          "score1": 1,
          "score2": 2
        },
        {
          "date": "2013-11-02",
          "team1": {
            "key": "herthabsc",
            "name": "Hertha BSC",
            "code": "BSC"
          },
          "team2": {
            "key": "schalke",
            "name": "Schalke 04",
            "code": "S04"
          },
          "score1": 0,
          "score2": 2
        },
        {
          "date": "2013-11-03",
          "team1": {
            "key": "augsburg",
            "name": "FC Augsburg",
            "code": "FCA"
          },
          "team2": {
            "key": "mainz",
            "name": "1. FSV Mainz 05",
            "code": "M05"
          },
          "score1": 2,
          "score2": 1
        },
        {
          "date": "2013-11-03",
          "team1": {
            "key": "bremen",
            "name": "Werder Bremen",
            "code": "BRE"
          },
          "team2": {
            "key": "hannover",
            "name": "Hannover 96",
            "code": "H96"
          },
          "score1": 3,
          "score2": 2
        }
      ]
    },
    {
      "name": "12. Spieltag",
      "matches": [
        {
          "date": "2013-11-08",
          "team1": {
            "key": "hannover",
            "name": "Hannover 96",
            "code": "H96"
          },
          "team2": {
            "key": "braunschweig",
            "name": "Eintr. Braunschweig",
            "code": "EBS"
          },
          "score1": 0,
          "score2": 0
        },
        {
          "date": "2013-11-09",
          "team1": {
            "key": "bayern",
            "name": "FC Bayern München",
            "code": "FCB"
          },
          "team2": {
            "key": "augsburg",
            "name": "FC Augsburg",
            "code": "FCA"
          },
          "score1": 3,
          "score2": 0
        },
        {
          "date": "2013-11-09",
          "team1": {
            "key": "schalke",
            "name": "Schalke 04",
            "code": "S04"
          },
          "team2": {
            "key": "bremen",
            "name": "Werder Bremen",
            "code": "BRE"
          },
          "score1": 3,
          "score2": 1
        },
        {
          "date": "2013-11-09",
          "team1": {
            "key": "mgladbach",
            "name": "Borussia M'gladbach",
            "code": "BMG"
          },
          "team2": {
            "key": "nuernberg",
            "name": "1. FC Nürnberg",
            "code": "FCN"
          },
          "score1": 3,
          "score2": 1
        },
        {
          "date": "2013-11-09",
          "team1": {
            "key": "leverkusen",
            "name": "Bayer 04 Leverkusen",
            "code": "B04"
          },
          "team2": {
            "key": "hsv",
            "name": "Hamburger SV",
            "code": "HSV"
          },
          "score1": 5,
          "score2": 3
        },
        {
          "date": "2013-11-09",
          "team1": {
            "key": "wolfsburg",
            "name": "VfL Wolfsburg",
            "code": "WOB"
          },
          "team2": {
            "key": "dortmund",
            "name": "Borussia Dortmund",
            "code": "BVB"
          },
          "score1": 2,
          "score2": 1
        },
        {
          "date": "2013-11-09",
          "team1": {
            "key": "hoffenheim",
            "name": "1899 Hoffenheim",
            "code": "HOF"
          },
          "team2": {
            "key": "herthabsc",
            "name": "Hertha BSC",
            "code": "BSC"
          },
          "score1": 2,
          "score2": 3
        },
        {
          "date": "2013-11-10",
          "team1": {
            "key": "mainz",
            "name": "1. FSV Mainz 05",
            "code": "M05"
          },
          "team2": {
            "key": "frankfurt",
            "name": "Eintracht Frankfurt",
            "code": "FFM"
          },
          "score1": 1,
          "score2": 0
        },
        {
          "date": "2013-11-10",
          "team1": {
            "key": "freiburg",
            "name": "SC Freiburg",
            "code": "SCF"
          },
          "team2": {
            "key": "stuttgart",
            "name": "Stuttgart",
            "code": "VFB"
          },
          "score1": 1,
          "score2": 3
        }
      ]
    },
    {
      "name": "13. Spieltag",
      "matches": [
        {
          "date": "2013-11-22",
          "team1": {
            "key": "stuttgart",
            "name": "Stuttgart",
            "code": "VFB"
          },
          "team2": {
            "key": "mgladbach",
            "name": "Borussia M'gladbach",
            "code": "BMG"
          },
          "score1": 0,
          "score2": 2
        },
        {
          "date": "2013-11-23",
          "team1": {
            "key": "dortmund",
            "name": "Borussia Dortmund",
            "code": "BVB"
          },
          "team2": {
            "key": "bayern",
            "name": "FC Bayern München",
            "code": "FCB"
          },
          "score1": 0,
          "score2": 3
        },
        {
          "date": "2013-11-23",
          "team1": {
            "key": "nuernberg",
            "name": "1. FC Nürnberg",
            "code": "FCN"
          },
          "team2": {
            "key": "wolfsburg",
            "name": "VfL Wolfsburg",
            "code": "WOB"
          },
          "score1": 1,
          "score2": 1
        },
        {
          "date": "2013-11-23",
          "team1": {
            "key": "augsburg",
            "name": "FC Augsburg",
            "code": "FCA"
          },
          "team2": {
            "key": "hoffenheim",
            "name": "1899 Hoffenheim",
            "code": "HOF"
          },
          "score1": 2,
          "score2": 0
        },
        {
          "date": "2013-11-23",
          "team1": {
            "key": "braunschweig",
            "name": "Eintr. Braunschweig",
            "code": "EBS"
          },
          "team2": {
            "key": "freiburg",
            "name": "SC Freiburg",
            "code": "SCF"
          },
          "score1": 0,
          "score2": 1
        },
        {
          "date": "2013-11-23",
          "team1": {
            "key": "frankfurt",
            "name": "Eintracht Frankfurt",
            "code": "FFM"
          },
          "team2": {
            "key": "schalke",
            "name": "Schalke 04",
            "code": "S04"
          },
          "score1": 3,
          "score2": 3
        },
        {
          "date": "2013-11-23",
          "team1": {
            "key": "herthabsc",
            "name": "Hertha BSC",
            "code": "BSC"
          },
          "team2": {
            "key": "leverkusen",
            "name": "Bayer 04 Leverkusen",
            "code": "B04"
          },
          "score1": 0,
          "score2": 1
        },
        {
          "date": "2013-11-24",
          "team1": {
            "key": "hsv",
            "name": "Hamburger SV",
            "code": "HSV"
          },
          "team2": {
            "key": "hannover",
            "name": "Hannover 96",
            "code": "H96"
          },
          "score1": 3,
          "score2": 1
        },
        {
          "date": "2013-11-24",
          "team1": {
            "key": "bremen",
            "name": "Werder Bremen",
            "code": "BRE"
          },
          "team2": {
            "key": "mainz",
            "name": "1. FSV Mainz 05",
            "code": "M05"
          },
          "score1": 2,
          "score2": 3
        }
      ]
    },
    {
      "name": "14. Spieltag",
      "matches": [
        {
          "date": "2013-11-29",
          "team1": {
            "key": "wolfsburg",
            "name": "VfL Wolfsburg",
            "code": "WOB"
          },
          "team2": {
            "key": "hsv",
            "name": "Hamburger SV",
            "code": "HSV"
          },
          "score1": 1,
          "score2": 1
        },
        {
          "date": "2013-11-30",
          "team1": {
            "key": "bayern",
            "name": "FC Bayern München",
            "code": "FCB"
          },
          "team2": {
            "key": "braunschweig",
            "name": "Eintr. Braunschweig",
            "code": "EBS"
          },
          "score1": 2,
          "score2": 0
        },
        {
          "date": "2013-11-30",
          "team1": {
            "key": "schalke",
            "name": "Schalke 04",
            "code": "S04"
          },
          "team2": {
            "key": "stuttgart",
            "name": "Stuttgart",
            "code": "VFB"
          },
          "score1": 3,
          "score2": 0
        },
        {
          "date": "2013-11-30",
          "team1": {
            "key": "leverkusen",
            "name": "Bayer 04 Leverkusen",
            "code": "B04"
          },
          "team2": {
            "key": "nuernberg",
            "name": "1. FC Nürnberg",
            "code": "FCN"
          },
          "score1": 3,
          "score2": 0
        },
        {
          "date": "2013-11-30",
          "team1": {
            "key": "hoffenheim",
            "name": "1899 Hoffenheim",
            "code": "HOF"
          },
          "team2": {
            "key": "bremen",
            "name": "Werder Bremen",
            "code": "BRE"
          },
          "score1": 4,
          "score2": 4
        },
        {
          "date": "2013-11-30",
          "team1": {
            "key": "mainz",
            "name": "1. FSV Mainz 05",
            "code": "M05"
          },
          "team2": {
            "key": "dortmund",
            "name": "Borussia Dortmund",
            "code": "BVB"
          },
          "score1": 1,
          "score2": 3
        },
        {
          "date": "2013-11-30",
          "team1": {
            "key": "herthabsc",
            "name": "Hertha BSC",
            "code": "BSC"
          },
          "team2": {
            "key": "augsburg",
            "name": "FC Augsburg",
            "code": "FCA"
          },
          "score1": 0,
          "score2": 0
        },
        {
          "date": "2013-12-01",
          "team1": {
            "key": "hannover",
            "name": "Hannover 96",
            "code": "H96"
          },
          "team2": {
            "key": "frankfurt",
            "name": "Eintracht Frankfurt",
            "code": "FFM"
          },
          "score1": 2,
          "score2": 0
        },
        {
          "date": "2013-12-01",
          "team1": {
            "key": "mgladbach",
            "name": "Borussia M'gladbach",
            "code": "BMG"
          },
          "team2": {
            "key": "freiburg",
            "name": "SC Freiburg",
            "code": "SCF"
          },
          "score1": 1,
          "score2": 0
        }
      ]
    },
    {
      "name": "15. Spieltag",
      "matches": [
        {
          "date": "2013-12-06",
          "team1": {
            "key": "nuernberg",
            "name": "1. FC Nürnberg",
            "code": "FCN"
          },
          "team2": {
            "key": "mainz",
            "name": "1. FSV Mainz 05",
            "code": "M05"
          },
          "score1": 1,
          "score2": 1
        },
        {
          "date": "2013-12-07",
          "team1": {
            "key": "dortmund",
            "name": "Borussia Dortmund",
            "code": "BVB"
          },
          "team2": {
            "key": "leverkusen",
            "name": "Bayer 04 Leverkusen",
            "code": "B04"
          },
          "score1": 0,
          "score2": 1
        },
        {
          "date": "2013-12-07",
          "team1": {
            "key": "mgladbach",
            "name": "Borussia M'gladbach",
            "code": "BMG"
          },
          "team2": {
            "key": "schalke",
            "name": "Schalke 04",
            "code": "S04"
          },
          "score1": 2,
          "score2": 1
        },
        {
          "date": "2013-12-07",
          "team1": {
            "key": "stuttgart",
            "name": "Stuttgart",
            "code": "VFB"
          },
          "team2": {
            "key": "hannover",
            "name": "Hannover 96",
            "code": "H96"
          },
          "score1": 4,
          "score2": 2
        },
        {
          "date": "2013-12-07",
          "team1": {
            "key": "bremen",
            "name": "Werder Bremen",
            "code": "BRE"
          },
          "team2": {
            "key": "bayern",
            "name": "FC Bayern München",
            "code": "FCB"
          },
          "score1": 0,
          "score2": 7
        },
        {
          "date": "2013-12-07",
          "team1": {
            "key": "hsv",
            "name": "Hamburger SV",
            "code": "HSV"
          },
          "team2": {
            "key": "augsburg",
            "name": "FC Augsburg",
            "code": "FCA"
          },
          "score1": 0,
          "score2": 1
        },
        {
          "date": "2013-12-07",
          "team1": {
            "key": "frankfurt",
            "name": "Eintracht Frankfurt",
            "code": "FFM"
          },
          "team2": {
            "key": "hoffenheim",
            "name": "1899 Hoffenheim",
            "code": "HOF"
          },
          "score1": 1,
          "score2": 2
        },
        {
          "date": "2013-12-08",
          "team1": {
            "key": "freiburg",
            "name": "SC Freiburg",
            "code": "SCF"
          },
          "team2": {
            "key": "wolfsburg",
            "name": "VfL Wolfsburg",
            "code": "WOB"
          },
          "score1": 0,
          "score2": 3
        },
        {
          "date": "2013-12-08",
          "team1": {
            "key": "braunschweig",
            "name": "Eintr. Braunschweig",
            "code": "EBS"
          },
          "team2": {
            "key": "herthabsc",
            "name": "Hertha BSC",
            "code": "BSC"
          },
          "score1": 0,
          "score2": 2
        }
      ]
    },
    {
      "name": "16. Spieltag",
      "matches": [
        {
          "date": "2013-12-13",
          "team1": {
            "key": "herthabsc",
            "name": "Hertha BSC",
            "code": "BSC"
          },
          "team2": {
            "key": "bremen",
            "name": "Werder Bremen",
            "code": "BRE"
          },
          "score1": 3,
          "score2": 2
        },
        {
          "date": "2013-12-14",
          "team1": {
            "key": "bayern",
            "name": "FC Bayern München",
            "code": "FCB"
          },
          "team2": {
            "key": "hsv",
            "name": "Hamburger SV",
            "code": "HSV"
          },
          "score1": 3,
          "score2": 1
        },
        {
          "date": "2013-12-14",
          "team1": {
            "key": "hannover",
            "name": "Hannover 96",
            "code": "H96"
          },
          "team2": {
            "key": "nuernberg",
            "name": "1. FC Nürnberg",
            "code": "FCN"
          },
          "score1": 3,
          "score2": 3
        },
        {
          "date": "2013-12-14",
          "team1": {
            "key": "wolfsburg",
            "name": "VfL Wolfsburg",
            "code": "WOB"
          },
          "team2": {
            "key": "stuttgart",
            "name": "Stuttgart",
            "code": "VFB"
          },
          "score1": 3,
          "score2": 1
        },
        {
          "date": "2013-12-14",
          "team1": {
            "key": "hoffenheim",
            "name": "1899 Hoffenheim",
            "code": "HOF"
          },
          "team2": {
            "key": "dortmund",
            "name": "Borussia Dortmund",
            "code": "BVB"
          },
          "score1": 2,
          "score2": 2
        },
        {
          "date": "2013-12-14",
          "team1": {
            "key": "mainz",
            "name": "1. FSV Mainz 05",
            "code": "M05"
          },
          "team2": {
            "key": "mgladbach",
            "name": "Borussia M'gladbach",
            "code": "BMG"
          },
          "score1": 0,
          "score2": 0
        },
        {
          "date": "2013-12-14",
          "team1": {
            "key": "augsburg",
            "name": "FC Augsburg",
            "code": "FCA"
          },
          "team2": {
            "key": "braunschweig",
            "name": "Eintr. Braunschweig",
            "code": "EBS"
          },
          "score1": 4,
          "score2": 1
        },
        {
          "date": "2013-12-15",
          "team1": {
            "key": "schalke",
            "name": "Schalke 04",
            "code": "S04"
          },
          "team2": {
            "key": "freiburg",
            "name": "SC Freiburg",
            "code": "SCF"
          },
          "score1": 2,
          "score2": 0
        },
        {
          "date": "2013-12-15",
          "team1": {
            "key": "leverkusen",
            "name": "Bayer 04 Leverkusen",
            "code": "B04"
          },
          "team2": {
            "key": "frankfurt",
            "name": "Eintracht Frankfurt",
            "code": "FFM"
          },
          "score1": 0,
          "score2": 1
        }
      ]
    },
    {
      "name": "17. Spieltag",
      "matches": [
        {
          "date": "2013-12-20",
          "team1": {
            "key": "frankfurt",
            "name": "Eintracht Frankfurt",
            "code": "FFM"
          },
          "team2": {
            "key": "augsburg",
            "name": "FC Augsburg",
            "code": "FCA"
          },
          "score1": 1,
          "score2": 1
        },
        {
          "date": "2013-12-21",
          "team1": {
            "key": "dortmund",
            "name": "Borussia Dortmund",
            "code": "BVB"
          },
          "team2": {
            "key": "herthabsc",
            "name": "Hertha BSC",
            "code": "BSC"
          },
          "score1": 1,
          "score2": 2
        },
        {
          "date": "2013-12-21",
          "team1": {
            "key": "bremen",
            "name": "Werder Bremen",
            "code": "BRE"
          },
          "team2": {
            "key": "leverkusen",
            "name": "Bayer 04 Leverkusen",
            "code": "B04"
          },
          "score1": 1,
          "score2": 0
        },
        {
          "date": "2013-12-21",
          "team1": {
            "key": "nuernberg",
            "name": "1. FC Nürnberg",
            "code": "FCN"
          },
          "team2": {
            "key": "schalke",
            "name": "Schalke 04",
            "code": "S04"
          },
          "score1": 0,
          "score2": 0
        },
        {
          "date": "2013-12-21",
          "team1": {
            "key": "freiburg",
            "name": "SC Freiburg",
            "code": "SCF"
          },
          "team2": {
            "key": "hannover",
            "name": "Hannover 96",
            "code": "H96"
          },
          "score1": 2,
          "score2": 1
        },
        {
          "date": "2013-12-21",
          "team1": {
            "key": "hsv",
            "name": "Hamburger SV",
            "code": "HSV"
          },
          "team2": {
            "key": "mainz",
            "name": "1. FSV Mainz 05",
            "code": "M05"
          },
          "score1": 2,
          "score2": 3
        },
        {
          "date": "2013-12-21",
          "team1": {
            "key": "braunschweig",
            "name": "Eintr. Braunschweig",
            "code": "EBS"
          },
          "team2": {
            "key": "hoffenheim",
            "name": "1899 Hoffenheim",
            "code": "HOF"
          },
          "score1": 1,
          "score2": 0
        },
        {
          "date": "2013-12-22",
          "team1": {
            "key": "mgladbach",
            "name": "Borussia M'gladbach",
            "code": "BMG"
          },
          "team2": {
            "key": "wolfsburg",
            "name": "VfL Wolfsburg",
            "code": "WOB"
          },
          "score1": 2,
          "score2": 2
        },
        {
          "date": "2014-01-29",
          "team1": {
            "key": "stuttgart",
            "name": "Stuttgart",
            "code": "VFB"
          },
          "team2": {
            "key": "bayern",
            "name": "FC Bayern München",
            "code": "FCB"
          },
          "score1": 1,
          "score2": 2
        }
      ]
    },
    {
      "name": "18. Spieltag",
      "matches": [
        {
          "date": "2014-01-24",
          "team1": {
            "key": "mgladbach",
            "name": "Borussia M'gladbach",
            "code": "BMG"
          },
          "team2": {
            "key": "bayern",
            "name": "FC Bayern München",
            "code": "FCB"
          },
          "score1": 0,
          "score2": 2
        },
        {
          "date": "2014-01-25",
          "team1": {
            "key": "freiburg",
            "name": "SC Freiburg",
            "code": "SCF"
          },
          "team2": {
            "key": "leverkusen",
            "name": "Bayer 04 Leverkusen",
            "code": "B04"
          },
          "score1": 3,
          "score2": 2
        },
        {
          "date": "2014-01-25",
          "team1": {
            "key": "wolfsburg",
            "name": "VfL Wolfsburg",
            "code": "WOB"
          },
          "team2": {
            "key": "hannover",
            "name": "Hannover 96",
            "code": "H96"
          },
          "score1": 1,
          "score2": 3
        },
        {
          "date": "2014-01-25",
          "team1": {
            "key": "nuernberg",
            "name": "1. FC Nürnberg",
            "code": "FCN"
          },
          "team2": {
            "key": "hoffenheim",
            "name": "1899 Hoffenheim",
            "code": "HOF"
          },
          "score1": 4,
          "score2": 0
        },
        {
          "date": "2014-01-25",
          "team1": {
            "key": "stuttgart",
            "name": "Stuttgart",
            "code": "VFB"
          },
          "team2": {
            "key": "mainz",
            "name": "1. FSV Mainz 05",
            "code": "M05"
          },
          "score1": 1,
          "score2": 2
        },
        {
          "date": "2014-01-25",
          "team1": {
            "key": "dortmund",
            "name": "Borussia Dortmund",
            "code": "BVB"
          },
          "team2": {
            "key": "augsburg",
            "name": "FC Augsburg",
            "code": "FCA"
          },
          "score1": 2,
          "score2": 2
        },
        {
          "date": "2014-01-25",
          "team1": {
            "key": "frankfurt",
            "name": "Eintracht Frankfurt",
            "code": "FFM"
          },
          "team2": {
            "key": "herthabsc",
            "name": "Hertha BSC",
            "code": "BSC"
          },
          "score1": 1,
          "score2": 0
        },
        {
          "date": "2014-01-26",
          "team1": {
            "key": "bremen",
            "name": "Werder Bremen",
            "code": "BRE"
          },
          "team2": {
            "key": "braunschweig",
            "name": "Eintr. Braunschweig",
            "code": "EBS"
          },
          "score1": 0,
          "score2": 0
        },
        {
          "date": "2014-01-26",
          "team1": {
            "key": "hsv",
            "name": "Hamburger SV",
            "code": "HSV"
          },
          "team2": {
            "key": "schalke",
            "name": "Schalke 04",
            "code": "S04"
          },
          "score1": 0,
          "score2": 3
        }
      ]
    },
    {
      "name": "19. Spieltag",
      "matches": [
        {
          "date": "2014-01-31",
          "team1": {
            "key": "braunschweig",
            "name": "Eintr. Braunschweig",
            "code": "EBS"
          },
          "team2": {
            "key": "dortmund",
            "name": "Borussia Dortmund",
            "code": "BVB"
          },
          "score1": 1,
          "score2": 2
        },
        {
          "date": "2014-02-01",
          "team1": {
            "key": "hannover",
            "name": "Hannover 96",
            "code": "H96"
          },
          "team2": {
            "key": "mgladbach",
            "name": "Borussia M'gladbach",
            "code": "BMG"
          },
          "score1": 3,
          "score2": 1
        },
        {
          "date": "2014-02-01",
          "team1": {
            "key": "leverkusen",
            "name": "Bayer 04 Leverkusen",
            "code": "B04"
          },
          "team2": {
            "key": "stuttgart",
            "name": "Stuttgart",
            "code": "VFB"
          },
          "score1": 2,
          "score2": 1
        },
        {
          "date": "2014-02-01",
          "team1": {
            "key": "schalke",
            "name": "Schalke 04",
            "code": "S04"
          },
          "team2": {
            "key": "wolfsburg",
            "name": "VfL Wolfsburg",
            "code": "WOB"
          },
          "score1": 2,
          "score2": 1
        },
        {
          "date": "2014-02-01",
          "team1": {
            "key": "augsburg",
            "name": "FC Augsburg",
            "code": "FCA"
          },
          "team2": {
            "key": "bremen",
            "name": "Werder Bremen",
            "code": "BRE"
          },
          "score1": 3,
          "score2": 1
        },
        {
          "date": "2014-02-01",
          "team1": {
            "key": "mainz",
            "name": "1. FSV Mainz 05",
            "code": "M05"
          },
          "team2": {
            "key": "freiburg",
            "name": "SC Freiburg",
            "code": "SCF"
          },
          "score1": 2,
          "score2": 0
        },
        {
          "date": "2014-02-01",
          "team1": {
            "key": "hoffenheim",
            "name": "1899 Hoffenheim",
            "code": "HOF"
          },
          "team2": {
            "key": "hsv",
            "name": "Hamburger SV",
            "code": "HSV"
          },
          "score1": 3,
          "score2": 0
        },
        {
          "date": "2014-02-02",
          "team1": {
            "key": "herthabsc",
            "name": "Hertha BSC",
            "code": "BSC"
          },
          "team2": {
            "key": "nuernberg",
            "name": "1. FC Nürnberg",
            "code": "FCN"
          },
          "score1": 1,
          "score2": 3
        },
        {
          "date": "2014-02-02",
          "team1": {
            "key": "bayern",
            "name": "FC Bayern München",
            "code": "FCB"
          },
          "team2": {
            "key": "frankfurt",
            "name": "Eintracht Frankfurt",
            "code": "FFM"
          },
          "score1": 5,
          "score2": 0
        }
      ]
    },
    {
      "name": "20. Spieltag",
      "matches": [
        {
          "date": "2014-02-07",
          "team1": {
            "key": "mgladbach",
            "name": "Borussia M'gladbach",
            "code": "BMG"
          },
          "team2": {
            "key": "leverkusen",
            "name": "Bayer 04 Leverkusen",
            "code": "B04"
          },
          "score1": 0,
          "score2": 1
        },
        {
          "date": "2014-02-08",
          "team1": {
            "key": "bremen",
            "name": "Werder Bremen",
            "code": "BRE"
          },
          "team2": {
            "key": "dortmund",
            "name": "Borussia Dortmund",
            "code": "BVB"
          },
          "score1": 1,
          "score2": 5
        },
        {
          "date": "2014-02-08",
          "team1": {
            "key": "nuernberg",
            "name": "1. FC Nürnberg",
            "code": "FCN"
          },
          "team2": {
            "key": "bayern",
            "name": "FC Bayern München",
            "code": "FCB"
          },
          "score1": 0,
          "score2": 2
        },
        {
          "date": "2014-02-08",
          "team1": {
            "key": "freiburg",
            "name": "SC Freiburg",
            "code": "SCF"
          },
          "team2": {
            "key": "hoffenheim",
            "name": "1899 Hoffenheim",
            "code": "HOF"
          },
          "score1": 1,
          "score2": 1
        },
        {
          "date": "2014-02-08",
          "team1": {
            "key": "wolfsburg",
            "name": "VfL Wolfsburg",
            "code": "WOB"
          },
          "team2": {
            "key": "mainz",
            "name": "1. FSV Mainz 05",
            "code": "M05"
          },
          "score1": 3,
          "score2": 0
        },
        {
          "date": "2014-02-08",
          "team1": {
            "key": "frankfurt",
            "name": "Eintracht Frankfurt",
            "code": "FFM"
          },
          "team2": {
            "key": "braunschweig",
            "name": "Eintr. Braunschweig",
            "code": "EBS"
          },
          "score1": 3,
          "score2": 0
        },
        {
          "date": "2014-02-08",
          "team1": {
            "key": "hsv",
            "name": "Hamburger SV",
            "code": "HSV"
          },
          "team2": {
            "key": "herthabsc",
            "name": "Hertha BSC",
            "code": "BSC"
          },
          "score1": 0,
          "score2": 3
        },
        {
          "date": "2014-02-09",
          "team1": {
            "key": "stuttgart",
            "name": "Stuttgart",
            "code": "VFB"
          },
          "team2": {
            "key": "augsburg",
            "name": "FC Augsburg",
            "code": "FCA"
          },
          "score1": 1,
          "score2": 4
        },
        {
          "date": "2014-02-09",
          "team1": {
            "key": "schalke",
            "name": "Schalke 04",
            "code": "S04"
          },
          "team2": {
            "key": "hannover",
            "name": "Hannover 96",
            "code": "H96"
          },
          "score1": 2,
          "score2": 0
        }
      ]
    },
    {
      "name": "21. Spieltag",
      "matches": [
        {
          "date": "2014-02-14",
          "team1": {
            "key": "mainz",
            "name": "1. FSV Mainz 05",
            "code": "M05"
          },
          "team2": {
            "key": "hannover",
            "name": "Hannover 96",
            "code": "H96"
          },
          "score1": 2,
          "score2": 0
        },
        {
          "date": "2014-02-15",
          "team1": {
            "key": "leverkusen",
            "name": "Bayer 04 Leverkusen",
            "code": "B04"
          },
          "team2": {
            "key": "schalke",
            "name": "Schalke 04",
            "code": "S04"
          },
          "score1": 1,
          "score2": 2
        },
        {
          "date": "2014-02-15",
          "team1": {
            "key": "bremen",
            "name": "Werder Bremen",
            "code": "BRE"
          },
          "team2": {
            "key": "mgladbach",
            "name": "Borussia M'gladbach",
            "code": "BMG"
          },
          "score1": 1,
          "score2": 1
        },
        {
          "date": "2014-02-15",
          "team1": {
            "key": "hoffenheim",
            "name": "1899 Hoffenheim",
            "code": "HOF"
          },
          "team2": {
            "key": "stuttgart",
            "name": "Stuttgart",
            "code": "VFB"
          },
          "score1": 4,
          "score2": 1
        },
        {
          "date": "2014-02-15",
          "team1": {
            "key": "bayern",
            "name": "FC Bayern München",
            "code": "FCB"
          },
          "team2": {
            "key": "freiburg",
            "name": "SC Freiburg",
            "code": "SCF"
          },
          "score1": 4,
          "score2": 0
        },
        {
          "date": "2014-02-15",
          "team1": {
            "key": "braunschweig",
            "name": "Eintr. Braunschweig",
            "code": "EBS"
          },
          "team2": {
            "key": "hsv",
            "name": "Hamburger SV",
            "code": "HSV"
          },
          "score1": 4,
          "score2": 2
        },
        {
          "date": "2014-02-15",
          "team1": {
            "key": "dortmund",
            "name": "Borussia Dortmund",
            "code": "BVB"
          },
          "team2": {
            "key": "frankfurt",
            "name": "Eintracht Frankfurt",
            "code": "FFM"
          },
          "score1": 4,
          "score2": 0
        },
        {
          "date": "2014-02-16",
          "team1": {
            "key": "augsburg",
            "name": "FC Augsburg",
            "code": "FCA"
          },
          "team2": {
            "key": "nuernberg",
            "name": "1. FC Nürnberg",
            "code": "FCN"
          },
          "score1": 0,
          "score2": 1
        },
        {
          "date": "2014-02-16",
          "team1": {
            "key": "herthabsc",
            "name": "Hertha BSC",
            "code": "BSC"
          },
          "team2": {
            "key": "wolfsburg",
            "name": "VfL Wolfsburg",
            "code": "WOB"
          },
          "score1": 1,
          "score2": 2
        }
      ]
    },
    {
      "name": "22. Spieltag",
      "matches": [
        {
          "date": "2014-02-21",
          "team1": {
            "key": "schalke",
            "name": "Schalke 04",
            "code": "S04"
          },
          "team2": {
            "key": "mainz",
            "name": "1. FSV Mainz 05",
            "code": "M05"
          },
          "score1": 0,
          "score2": 0
        },
        {
          "date": "2014-02-22",
          "team1": {
            "key": "hsv",
            "name": "Hamburger SV",
            "code": "HSV"
          },
          "team2": {
            "key": "dortmund",
            "name": "Borussia Dortmund",
            "code": "BVB"
          },
          "score1": 3,
          "score2": 0
        },
        {
          "date": "2014-02-22",
          "team1": {
            "key": "wolfsburg",
            "name": "VfL Wolfsburg",
            "code": "WOB"
          },
          "team2": {
            "key": "leverkusen",
            "name": "Bayer 04 Leverkusen",
            "code": "B04"
          },
          "score1": 3,
          "score2": 1
        },
        {
          "date": "2014-02-22",
          "team1": {
            "key": "mgladbach",
            "name": "Borussia M'gladbach",
            "code": "BMG"
          },
          "team2": {
            "key": "hoffenheim",
            "name": "1899 Hoffenheim",
            "code": "HOF"
          },
          "score1": 2,
          "score2": 2
        },
        {
          "date": "2014-02-22",
          "team1": {
            "key": "freiburg",
            "name": "SC Freiburg",
            "code": "SCF"
          },
          "team2": {
            "key": "augsburg",
            "name": "FC Augsburg",
            "code": "FCA"
          },
          "score1": 2,
          "score2": 4
        },
        {
          "date": "2014-02-22",
          "team1": {
            "key": "nuernberg",
            "name": "1. FC Nürnberg",
            "code": "FCN"
          },
          "team2": {
            "key": "braunschweig",
            "name": "Eintr. Braunschweig",
            "code": "EBS"
          },
          "score1": 2,
          "score2": 1
        },
        {
          "date": "2014-02-22",
          "team1": {
            "key": "stuttgart",
            "name": "Stuttgart",
            "code": "VFB"
          },
          "team2": {
            "key": "herthabsc",
            "name": "Hertha BSC",
            "code": "BSC"
          },
          "score1": 1,
          "score2": 2
        },
        {
          "date": "2014-02-23",
          "team1": {
            "key": "frankfurt",
            "name": "Eintracht Frankfurt",
            "code": "FFM"
          },
          "team2": {
            "key": "bremen",
            "name": "Werder Bremen",
            "code": "BRE"
          },
          "score1": 0,
          "score2": 0
        },
        {
          "date": "2014-02-23",
          "team1": {
            "key": "hannover",
            "name": "Hannover 96",
            "code": "H96"
          },
          "team2": {
            "key": "bayern",
            "name": "FC Bayern München",
            "code": "FCB"
          },
          "score1": 0,
          "score2": 4
        }
      ]
    },
    {
      "name": "23. Spieltag",
      "matches": [
        {
          "date": "2014-02-28",
          "team1": {
            "key": "herthabsc",
            "name": "Hertha BSC",
            "code": "BSC"
          },
          "team2": {
            "key": "freiburg",
            "name": "SC Freiburg",
            "code": "SCF"
          },
          "score1": 0,
          "score2": 0
        },
        {
          "date": "2014-03-01",
          "team1": {
            "key": "bayern",
            "name": "FC Bayern München",
            "code": "FCB"
          },
          "team2": {
            "key": "schalke",
            "name": "Schalke 04",
            "code": "S04"
          },
          "score1": 5,
          "score2": 1
        },
        {
          "date": "2014-03-01",
          "team1": {
            "key": "braunschweig",
            "name": "Eintr. Braunschweig",
            "code": "EBS"
          },
          "team2": {
            "key": "mgladbach",
            "name": "Borussia M'gladbach",
            "code": "BMG"
          },
          "score1": 1,
          "score2": 1
        },
        {
          "date": "2014-03-01",
          "team1": {
            "key": "augsburg",
            "name": "FC Augsburg",
            "code": "FCA"
          },
          "team2": {
            "key": "hannover",
            "name": "Hannover 96",
            "code": "H96"
          },
          "score1": 1,
          "score2": 1
        },
        {
          "date": "2014-03-01",
          "team1": {
            "key": "dortmund",
            "name": "Borussia Dortmund",
            "code": "BVB"
          },
          "team2": {
            "key": "nuernberg",
            "name": "1. FC Nürnberg",
            "code": "FCN"
          },
          "score1": 3,
          "score2": 0
        },
        {
          "date": "2014-03-01",
          "team1": {
            "key": "leverkusen",
            "name": "Bayer 04 Leverkusen",
            "code": "B04"
          },
          "team2": {
            "key": "mainz",
            "name": "1. FSV Mainz 05",
            "code": "M05"
          },
          "score1": 0,
          "score2": 1
        },
        {
          "date": "2014-03-01",
          "team1": {
            "key": "bremen",
            "name": "Werder Bremen",
            "code": "BRE"
          },
          "team2": {
            "key": "hsv",
            "name": "Hamburger SV",
            "code": "HSV"
          },
          "score1": 1,
          "score2": 0
        },
        {
          "date": "2014-03-02",
          "team1": {
            "key": "hoffenheim",
            "name": "1899 Hoffenheim",
            "code": "HOF"
          },
          "team2": {
            "key": "wolfsburg",
            "name": "VfL Wolfsburg",
            "code": "WOB"
          },
          "score1": 6,
          "score2": 2
        },
        {
          "date": "2014-03-02",
          "team1": {
            "key": "frankfurt",
            "name": "Eintracht Frankfurt",
            "code": "FFM"
          },
          "team2": {
            "key": "stuttgart",
            "name": "Stuttgart",
            "code": "VFB"
          },
          "score1": 2,
          "score2": 1
        }
      ]
    },
    {
      "name": "24. Spieltag",
      "matches": [
        {
          "date": "2014-03-08",
          "team1": {
            "key": "wolfsburg",
            "name": "VfL Wolfsburg",
            "code": "WOB"
          },
          "team2": {
            "key": "bayern",
            "name": "FC Bayern München",
            "code": "FCB"
          },
          "score1": 1,
          "score2": 6
        },
        {
          "date": "2014-03-08",
          "team1": {
            "key": "hannover",
            "name": "Hannover 96",
            "code": "H96"
          },
          "team2": {
            "key": "leverkusen",
            "name": "Bayer 04 Leverkusen",
            "code": "B04"
          },
          "score1": 1,
          "score2": 1
        },
        {
          "date": "2014-03-08",
          "team1": {
            "key": "nuernberg",
            "name": "1. FC Nürnberg",
            "code": "FCN"
          },
          "team2": {
            "key": "bremen",
            "name": "Werder Bremen",
            "code": "BRE"
          },
          "score1": 0,
          "score2": 2
        },
        {
          "date": "2014-03-08",
          "team1": {
            "key": "schalke",
            "name": "Schalke 04",
            "code": "S04"
          },
          "team2": {
            "key": "hoffenheim",
            "name": "1899 Hoffenheim",
            "code": "HOF"
          },
          "score1": 4,
          "score2": 0
        },
        {
          "date": "2014-03-08",
          "team1": {
            "key": "mgladbach",
            "name": "Borussia M'gladbach",
            "code": "BMG"
          },
          "team2": {
            "key": "augsburg",
            "name": "FC Augsburg",
            "code": "FCA"
          },
          "score1": 1,
          "score2": 2
        },
        {
          "date": "2014-03-08",
          "team1": {
            "key": "stuttgart",
            "name": "Stuttgart",
            "code": "VFB"
          },
          "team2": {
            "key": "braunschweig",
            "name": "Eintr. Braunschweig",
            "code": "EBS"
          },
          "score1": 2,
          "score2": 2
        },
        {
          "date": "2014-03-08",
          "team1": {
            "key": "hsv",
            "name": "Hamburger SV",
            "code": "HSV"
          },
          "team2": {
            "key": "frankfurt",
            "name": "Eintracht Frankfurt",
            "code": "FFM"
          },
          "score1": 1,
          "score2": 1
        },
        {
          "date": "2014-03-09",
          "team1": {
            "key": "freiburg",
            "name": "SC Freiburg",
            "code": "SCF"
          },
          "team2": {
            "key": "dortmund",
            "name": "Borussia Dortmund",
            "code": "BVB"
          },
          "score1": 0,
          "score2": 1
        },
        {
          "date": "2014-03-09",
          "team1": {
            "key": "mainz",
            "name": "1. FSV Mainz 05",
            "code": "M05"
          },
          "team2": {
            "key": "herthabsc",
            "name": "Hertha BSC",
            "code": "BSC"
          },
          "score1": 1,
          "score2": 1
        }
      ]
    },
    {
      "name": "25. Spieltag",
      "matches": [
        {
          "date": "2014-03-14",
          "team1": {
            "key": "augsburg",
            "name": "FC Augsburg",
            "code": "FCA"
          },
          "team2": {
            "key": "schalke",
            "name": "Schalke 04",
            "code": "S04"
          },
          "score1": 1,
          "score2": 2
        },
        {
          "date": "2014-03-15",
          "team1": {
            "key": "dortmund",
            "name": "Borussia Dortmund",
            "code": "BVB"
          },
          "team2": {
            "key": "mgladbach",
            "name": "Borussia M'gladbach",
            "code": "BMG"
          },
          "score1": 1,
          "score2": 2
        },
        {
          "date": "2014-03-15",
          "team1": {
            "key": "bayern",
            "name": "FC Bayern München",
            "code": "FCB"
          },
          "team2": {
            "key": "leverkusen",
            "name": "Bayer 04 Leverkusen",
            "code": "B04"
          },
          "score1": 2,
          "score2": 1
        },
        {
          "date": "2014-03-15",
          "team1": {
            "key": "bremen",
            "name": "Werder Bremen",
            "code": "BRE"
          },
          "team2": {
            "key": "stuttgart",
            "name": "Stuttgart",
            "code": "VFB"
          },
          "score1": 1,
          "score2": 0
        },
        {
          "date": "2014-03-15",
          "team1": {
            "key": "herthabsc",
            "name": "Hertha BSC",
            "code": "BSC"
          },
          "team2": {
            "key": "hannover",
            "name": "Hannover 96",
            "code": "H96"
          },
          "score1": 0,
          "score2": 3
        },
        {
          "date": "2014-03-15",
          "team1": {
            "key": "braunschweig",
            "name": "Eintr. Braunschweig",
            "code": "EBS"
          },
          "team2": {
            "key": "wolfsburg",
            "name": "VfL Wolfsburg",
            "code": "WOB"
          },
          "score1": 1,
          "score2": 1
        },
        {
          "date": "2014-03-15",
          "team1": {
            "key": "hoffenheim",
            "name": "1899 Hoffenheim",
            "code": "HOF"
          },
          "team2": {
            "key": "mainz",
            "name": "1. FSV Mainz 05",
            "code": "M05"
          },
          "score1": 2,
          "score2": 4
        },
        {
          "date": "2014-03-16",
          "team1": {
            "key": "hsv",
            "name": "Hamburger SV",
            "code": "HSV"
          },
          "team2": {
            "key": "nuernberg",
            "name": "1. FC Nürnberg",
            "code": "FCN"
          },
          "score1": 2,
          "score2": 1
        },
        {
          "date": "2014-03-16",
          "team1": {
            "key": "frankfurt",
            "name": "Eintracht Frankfurt",
            "code": "FFM"
          },
          "team2": {
            "key": "freiburg",
            "name": "SC Freiburg",
            "code": "SCF"
          },
          "score1": 1,
          "score2": 4
        }
      ]
    },
    {
      "name": "26. Spieltag",
      "matches": [
        {
          "date": "2014-03-21",
          "team1": {
            "key": "freiburg",
            "name": "SC Freiburg",
            "code": "SCF"
          },
          "team2": {
            "key": "bremen",
            "name": "Werder Bremen",
            "code": "BRE"
          },
          "score1": 3,
          "score2": 1
        },
        {
          "date": "2014-03-22",
          "team1": {
            "key": "hannover",
            "name": "Hannover 96",
            "code": "H96"
          },
          "team2": {
            "key": "dortmund",
            "name": "Borussia Dortmund",
            "code": "BVB"
          },
          "score1": 0,
          "score2": 3
        },
        {
          "date": "2014-03-22",
          "team1": {
            "key": "mainz",
            "name": "1. FSV Mainz 05",
            "code": "M05"
          },
          "team2": {
            "key": "bayern",
            "name": "FC Bayern München",
            "code": "FCB"
          },
          "score1": 0,
          "score2": 2
        },
        {
          "date": "2014-03-22",
          "team1": {
            "key": "wolfsburg",
            "name": "VfL Wolfsburg",
            "code": "WOB"
          },
          "team2": {
            "key": "augsburg",
            "name": "FC Augsburg",
            "code": "FCA"
          },
          "score1": 1,
          "score2": 1
        },
        {
          "date": "2014-03-22",
          "team1": {
            "key": "stuttgart",
            "name": "Stuttgart",
            "code": "VFB"
          },
          "team2": {
            "key": "hsv",
            "name": "Hamburger SV",
            "code": "HSV"
          },
          "score1": 1,
          "score2": 0
        },
        {
          "date": "2014-03-22",
          "team1": {
            "key": "schalke",
            "name": "Schalke 04",
            "code": "S04"
          },
          "team2": {
            "key": "braunschweig",
            "name": "Eintr. Braunschweig",
            "code": "EBS"
          },
          "score1": 3,
          "score2": 1
        },
        {
          "date": "2014-03-22",
          "team1": {
            "key": "mgladbach",
            "name": "Borussia M'gladbach",
            "code": "BMG"
          },
          "team2": {
            "key": "herthabsc",
            "name": "Hertha BSC",
            "code": "BSC"
          },
          "score1": 3,
          "score2": 0
        },
        {
          "date": "2014-03-23",
          "team1": {
            "key": "nuernberg",
            "name": "1. FC Nürnberg",
            "code": "FCN"
          },
          "team2": {
            "key": "frankfurt",
            "name": "Eintracht Frankfurt",
            "code": "FFM"
          },
          "score1": 2,
          "score2": 5
        },
        {
          "date": "2014-03-23",
          "team1": {
            "key": "leverkusen",
            "name": "Bayer 04 Leverkusen",
            "code": "B04"
          },
          "team2": {
            "key": "hoffenheim",
            "name": "1899 Hoffenheim",
            "code": "HOF"
          },
          "score1": 2,
          "score2": 3
        }
      ]
    },
    {
      "name": "27. Spieltag",
      "matches": [
        {
          "date": "2014-03-25",
          "team1": {
            "key": "herthabsc",
            "name": "Hertha BSC",
            "code": "BSC"
          },
          "team2": {
            "key": "bayern",
            "name": "FC Bayern München",
            "code": "FCB"
          },
          "score1": 1,
          "score2": 3
        },
        {
          "date": "2014-03-25",
          "team1": {
            "key": "dortmund",
            "name": "Borussia Dortmund",
            "code": "BVB"
          },
          "team2": {
            "key": "schalke",
            "name": "Schalke 04",
            "code": "S04"
          },
          "score1": 0,
          "score2": 0
        },
        {
          "date": "2014-03-25",
          "team1": {
            "key": "bremen",
            "name": "Werder Bremen",
            "code": "BRE"
          },
          "team2": {
            "key": "wolfsburg",
            "name": "VfL Wolfsburg",
            "code": "WOB"
          },
          "score1": 1,
          "score2": 3
        },
        {
          "date": "2014-03-25",
          "team1": {
            "key": "braunschweig",
            "name": "Eintr. Braunschweig",
            "code": "EBS"
          },
          "team2": {
            "key": "mainz",
            "name": "1. FSV Mainz 05",
            "code": "M05"
          },
          "score1": 3,
          "score2": 1
        },
        {
          "date": "2014-03-26",
          "team1": {
            "key": "frankfurt",
            "name": "Eintracht Frankfurt",
            "code": "FFM"
          },
          "team2": {
            "key": "mgladbach",
            "name": "Borussia M'gladbach",
            "code": "BMG"
          },
          "score1": 1,
          "score2": 0
        },
        {
          "date": "2014-03-26",
          "team1": {
            "key": "augsburg",
            "name": "FC Augsburg",
            "code": "FCA"
          },
          "team2": {
            "key": "leverkusen",
            "name": "Bayer 04 Leverkusen",
            "code": "B04"
          },
          "score1": 1,
          "score2": 3
        },
        {
          "date": "2014-03-26",
          "team1": {
            "key": "nuernberg",
            "name": "1. FC Nürnberg",
            "code": "FCN"
          },
          "team2": {
            "key": "stuttgart",
            "name": "Stuttgart",
            "code": "VFB"
          },
          "score1": 2,
          "score2": 0
        },
        {
          "date": "2014-03-26",
          "team1": {
            "key": "hoffenheim",
            "name": "1899 Hoffenheim",
            "code": "HOF"
          },
          "team2": {
            "key": "hannover",
            "name": "Hannover 96",
            "code": "H96"
          },
          "score1": 3,
          "score2": 1
        },
        {
          "date": "2014-03-26",
          "team1": {
            "key": "hsv",
            "name": "Hamburger SV",
            "code": "HSV"
          },
          "team2": {
            "key": "freiburg",
            "name": "SC Freiburg",
            "code": "SCF"
          },
          "score1": 1,
          "score2": 0
        }
      ]
    },
    {
      "name": "28. Spieltag",
      "matches": [
        {
          "date": "2014-03-28",
          "team1": {
            "key": "schalke",
            "name": "Schalke 04",
            "code": "S04"
          },
          "team2": {
            "key": "herthabsc",
            "name": "Hertha BSC",
            "code": "BSC"
          },
          "score1": 2,
          "score2": 0
        },
        {
          "date": "2014-03-29",
          "team1": {
            "key": "stuttgart",
            "name": "Stuttgart",
            "code": "VFB"
          },
          "team2": {
            "key": "dortmund",
            "name": "Borussia Dortmund",
            "code": "BVB"
          },
          "score1": 2,
          "score2": 3
        },
        {
          "date": "2014-03-29",
          "team1": {
            "key": "freiburg",
            "name": "SC Freiburg",
            "code": "SCF"
          },
          "team2": {
            "key": "nuernberg",
            "name": "1. FC Nürnberg",
            "code": "FCN"
          },
          "score1": 3,
          "score2": 2
        },
        {
          "date": "2014-03-29",
          "team1": {
            "key": "bayern",
            "name": "FC Bayern München",
            "code": "FCB"
          },
          "team2": {
            "key": "hoffenheim",
            "name": "1899 Hoffenheim",
            "code": "HOF"
          },
          "score1": 3,
          "score2": 3
        },
        {
          "date": "2014-03-29",
          "team1": {
            "key": "mainz",
            "name": "1. FSV Mainz 05",
            "code": "M05"
          },
          "team2": {
            "key": "augsburg",
            "name": "FC Augsburg",
            "code": "FCA"
          },
          "score1": 3,
          "score2": 0
        },
        {
          "date": "2014-03-29",
          "team1": {
            "key": "leverkusen",
            "name": "Bayer 04 Leverkusen",
            "code": "B04"
          },
          "team2": {
            "key": "braunschweig",
            "name": "Eintr. Braunschweig",
            "code": "EBS"
          },
          "score1": 1,
          "score2": 1
        },
        {
          "date": "2014-03-29",
          "team1": {
            "key": "wolfsburg",
            "name": "VfL Wolfsburg",
            "code": "WOB"
          },
          "team2": {
            "key": "frankfurt",
            "name": "Eintracht Frankfurt",
            "code": "FFM"
          },
          "score1": 2,
          "score2": 1
        },
        {
          "date": "2014-03-30",
          "team1": {
            "key": "mgladbach",
            "name": "Borussia M'gladbach",
            "code": "BMG"
          },
          "team2": {
            "key": "hsv",
            "name": "Hamburger SV",
            "code": "HSV"
          },
          "score1": 3,
          "score2": 1
        },
        {
          "date": "2014-03-30",
          "team1": {
            "key": "hannover",
            "name": "Hannover 96",
            "code": "H96"
          },
          "team2": {
            "key": "bremen",
            "name": "Werder Bremen",
            "code": "BRE"
          },
          "score1": 1,
          "score2": 2
        }
      ]
    },
    {
      "name": "29. Spieltag",
      "matches": [
        {
          "date": "2014-04-04",
          "team1": {
            "key": "hsv",
            "name": "Hamburger SV",
            "code": "HSV"
          },
          "team2": {
            "key": "leverkusen",
            "name": "Bayer 04 Leverkusen",
            "code": "B04"
          },
          "score1": 2,
          "score2": 1
        },
        {
          "date": "2014-04-05",
          "team1": {
            "key": "augsburg",
            "name": "FC Augsburg",
            "code": "FCA"
          },
          "team2": {
            "key": "bayern",
            "name": "FC Bayern München",
            "code": "FCB"
          },
          "score1": 1,
          "score2": 0
        },
        {
          "date": "2014-04-05",
          "team1": {
            "key": "bremen",
            "name": "Werder Bremen",
            "code": "BRE"
          },
          "team2": {
            "key": "schalke",
            "name": "Schalke 04",
            "code": "S04"
          },
          "score1": 1,
          "score2": 1
        },
        {
          "date": "2014-04-05",
          "team1": {
            "key": "nuernberg",
            "name": "1. FC Nürnberg",
            "code": "FCN"
          },
          "team2": {
            "key": "mgladbach",
            "name": "Borussia M'gladbach",
            "code": "BMG"
          },
          "score1": 0,
          "score2": 2
        },
        {
          "date": "2014-04-05",
          "team1": {
            "key": "dortmund",
            "name": "Borussia Dortmund",
            "code": "BVB"
          },
          "team2": {
            "key": "wolfsburg",
            "name": "VfL Wolfsburg",
            "code": "WOB"
          },
          "score1": 2,
          "score2": 1
        },
        {
          "date": "2014-04-05",
          "team1": {
            "key": "stuttgart",
            "name": "Stuttgart",
            "code": "VFB"
          },
          "team2": {
            "key": "freiburg",
            "name": "SC Freiburg",
            "code": "SCF"
          },
          "score1": 2,
          "score2": 0
        },
        {
          "date": "2014-04-05",
          "team1": {
            "key": "frankfurt",
            "name": "Eintracht Frankfurt",
            "code": "FFM"
          },
          "team2": {
            "key": "mainz",
            "name": "1. FSV Mainz 05",
            "code": "M05"
          },
          "score1": 2,
          "score2": 0
        },
        {
          "date": "2014-04-06",
          "team1": {
            "key": "braunschweig",
            "name": "Eintr. Braunschweig",
            "code": "EBS"
          },
          "team2": {
            "key": "hannover",
            "name": "Hannover 96",
            "code": "H96"
          },
          "score1": 3,
          "score2": 0
        },
        {
          "date": "2014-04-06",
          "team1": {
            "key": "herthabsc",
            "name": "Hertha BSC",
            "code": "BSC"
          },
          "team2": {
            "key": "hoffenheim",
            "name": "1899 Hoffenheim",
            "code": "HOF"
          },
          "score1": 1,
          "score2": 1
        }
      ]
    },
    {
      "name": "30. Spieltag",
      "matches": [
        {
          "date": "2014-04-11",
          "team1": {
            "key": "schalke",
            "name": "Schalke 04",
            "code": "S04"
          },
          "team2": {
            "key": "frankfurt",
            "name": "Eintracht Frankfurt",
            "code": "FFM"
          },
          "score1": 2,
          "score2": 0
        },
        {
          "date": "2014-04-12",
          "team1": {
            "key": "mainz",
            "name": "1. FSV Mainz 05",
            "code": "M05"
          },
          "team2": {
            "key": "bremen",
            "name": "Werder Bremen",
            "code": "BRE"
          },
          "score1": 3,
          "score2": 0
        },
        {
          "date": "2014-04-12",
          "team1": {
            "key": "wolfsburg",
            "name": "VfL Wolfsburg",
            "code": "WOB"
          },
          "team2": {
            "key": "nuernberg",
            "name": "1. FC Nürnberg",
            "code": "FCN"
          },
          "score1": 4,
          "score2": 1
        },
        {
          "date": "2014-04-12",
          "team1": {
            "key": "hannover",
            "name": "Hannover 96",
            "code": "H96"
          },
          "team2": {
            "key": "hsv",
            "name": "Hamburger SV",
            "code": "HSV"
          },
          "score1": 2,
          "score2": 1
        },
        {
          "date": "2014-04-12",
          "team1": {
            "key": "freiburg",
            "name": "SC Freiburg",
            "code": "SCF"
          },
          "team2": {
            "key": "braunschweig",
            "name": "Eintr. Braunschweig",
            "code": "EBS"
          },
          "score1": 2,
          "score2": 0
        },
        {
          "date": "2014-04-12",
          "team1": {
            "key": "bayern",
            "name": "FC Bayern München",
            "code": "FCB"
          },
          "team2": {
            "key": "dortmund",
            "name": "Borussia Dortmund",
            "code": "BVB"
          },
          "score1": 0,
          "score2": 3
        },
        {
          "date": "2014-04-12",
          "team1": {
            "key": "mgladbach",
            "name": "Borussia M'gladbach",
            "code": "BMG"
          },
          "team2": {
            "key": "stuttgart",
            "name": "Stuttgart",
            "code": "VFB"
          },
          "score1": 1,
          "score2": 1
        },
        {
          "date": "2014-04-13",
          "team1": {
            "key": "leverkusen",
            "name": "Bayer 04 Leverkusen",
            "code": "B04"
          },
          "team2": {
            "key": "herthabsc",
            "name": "Hertha BSC",
            "code": "BSC"
          },
          "score1": 2,
          "score2": 1
        },
        {
          "date": "2014-04-13",
          "team1": {
            "key": "hoffenheim",
            "name": "1899 Hoffenheim",
            "code": "HOF"
          },
          "team2": {
            "key": "augsburg",
            "name": "FC Augsburg",
            "code": "FCA"
          },
          "score1": 2,
          "score2": 0
        }
      ]
    },
    {
      "name": "31. Spieltag",
      "matches": [
        {
          "date": "2014-04-17",
          "team1": {
            "key": "frankfurt",
            "name": "Eintracht Frankfurt",
            "code": "FFM"
          },
          "team2": {
            "key": "hannover",
            "name": "Hannover 96",
            "code": "H96"
          },
          "score1": 2,
          "score2": 3
        },
        {
          "date": "2014-04-19",
          "team1": {
            "key": "braunschweig",
            "name": "Eintr. Braunschweig",
            "code": "EBS"
          },
          "team2": {
            "key": "bayern",
            "name": "FC Bayern München",
            "code": "FCB"
          },
          "score1": 0,
          "score2": 2
        },
        {
          "date": "2014-04-19",
          "team1": {
            "key": "freiburg",
            "name": "SC Freiburg",
            "code": "SCF"
          },
          "team2": {
            "key": "mgladbach",
            "name": "Borussia M'gladbach",
            "code": "BMG"
          },
          "score1": 4,
          "score2": 2
        },
        {
          "date": "2014-04-19",
          "team1": {
            "key": "hsv",
            "name": "Hamburger SV",
            "code": "HSV"
          },
          "team2": {
            "key": "wolfsburg",
            "name": "VfL Wolfsburg",
            "code": "WOB"
          },
          "score1": 1,
          "score2": 3
        },
        {
          "date": "2014-04-19",
          "team1": {
            "key": "bremen",
            "name": "Werder Bremen",
            "code": "BRE"
          },
          "team2": {
            "key": "hoffenheim",
            "name": "1899 Hoffenheim",
            "code": "HOF"
          },
          "score1": 3,
          "score2": 1
        },
        {
          "date": "2014-04-19",
          "team1": {
            "key": "dortmund",
            "name": "Borussia Dortmund",
            "code": "BVB"
          },
          "team2": {
            "key": "mainz",
            "name": "1. FSV Mainz 05",
            "code": "M05"
          },
          "score1": 4,
          "score2": 2
        },
        {
          "date": "2014-04-19",
          "team1": {
            "key": "augsburg",
            "name": "FC Augsburg",
            "code": "FCA"
          },
          "team2": {
            "key": "herthabsc",
            "name": "Hertha BSC",
            "code": "BSC"
          },
          "score1": 0,
          "score2": 0
        },
        {
          "date": "2014-04-20",
          "team1": {
            "key": "nuernberg",
            "name": "1. FC Nürnberg",
            "code": "FCN"
          },
          "team2": {
            "key": "leverkusen",
            "name": "Bayer 04 Leverkusen",
            "code": "B04"
          },
          "score1": 1,
          "score2": 4
        },
        {
          "date": "2014-04-20",
          "team1": {
            "key": "stuttgart",
            "name": "Stuttgart",
            "code": "VFB"
          },
          "team2": {
            "key": "schalke",
            "name": "Schalke 04",
            "code": "S04"
          },
          "score1": 3,
          "score2": 1
        }
      ]
    },
    {
      "name": "32. Spieltag",
      "matches": [
        {
          "date": "2014-04-25",
          "team1": {
            "key": "hannover",
            "name": "Hannover 96",
            "code": "H96"
          },
          "team2": {
            "key": "stuttgart",
            "name": "Stuttgart",
            "code": "VFB"
          },
          "score1": 0,
          "score2": 0
        },
        {
          "date": "2014-04-26",
          "team1": {
            "key": "leverkusen",
            "name": "Bayer 04 Leverkusen",
            "code": "B04"
          },
          "team2": {
            "key": "dortmund",
            "name": "Borussia Dortmund",
            "code": "BVB"
          },
          "score1": 2,
          "score2": 2
        },
        {
          "date": "2014-04-26",
          "team1": {
            "key": "bayern",
            "name": "FC Bayern München",
            "code": "FCB"
          },
          "team2": {
            "key": "bremen",
            "name": "Werder Bremen",
            "code": "BRE"
          },
          "score1": 5,
          "score2": 2
        },
        {
          "date": "2014-04-26",
          "team1": {
            "key": "mainz",
            "name": "1. FSV Mainz 05",
            "code": "M05"
          },
          "team2": {
            "key": "nuernberg",
            "name": "1. FC Nürnberg",
            "code": "FCN"
          },
          "score1": 2,
          "score2": 0
        },
        {
          "date": "2014-04-26",
          "team1": {
            "key": "wolfsburg",
            "name": "VfL Wolfsburg",
            "code": "WOB"
          },
          "team2": {
            "key": "freiburg",
            "name": "SC Freiburg",
            "code": "SCF"
          },
          "score1": 2,
          "score2": 2
        },
        {
          "date": "2014-04-26",
          "team1": {
            "key": "herthabsc",
            "name": "Hertha BSC",
            "code": "BSC"
          },
          "team2": {
            "key": "braunschweig",
            "name": "Eintr. Braunschweig",
            "code": "EBS"
          },
          "score1": 2,
          "score2": 0
        },
        {
          "date": "2014-04-26",
          "team1": {
            "key": "hoffenheim",
            "name": "1899 Hoffenheim",
            "code": "HOF"
          },
          "team2": {
            "key": "frankfurt",
            "name": "Eintracht Frankfurt",
            "code": "FFM"
          },
          "score1": 0,
          "score2": 0
        },
        {
          "date": "2014-04-27",
          "team1": {
            "key": "augsburg",
            "name": "FC Augsburg",
            "code": "FCA"
          },
          "team2": {
            "key": "hsv",
            "name": "Hamburger SV",
            "code": "HSV"
          },
          "score1": 3,
          "score2": 1
        },
        {
          "date": "2014-04-27",
          "team1": {
            "key": "schalke",
            "name": "Schalke 04",
            "code": "S04"
          },
          "team2": {
            "key": "mgladbach",
            "name": "Borussia M'gladbach",
            "code": "BMG"
          },
          "score1": 0,
          "score2": 1
        }
      ]
    },
    {
      "name": "33. Spieltag",
      "matches": [
        {
          "date": "2014-05-03",
          "team1": {
            "key": "hsv",
            "name": "Hamburger SV",
            "code": "HSV"
          },
          "team2": {
            "key": "bayern",
            "name": "FC Bayern München",
            "code": "FCB"
          },
          "score1": 1,
          "score2": 4
        },
        {
          "date": "2014-05-03",
          "team1": {
            "key": "freiburg",
            "name": "SC Freiburg",
            "code": "SCF"
          },
          "team2": {
            "key": "schalke",
            "name": "Schalke 04",
            "code": "S04"
          },
          "score1": 0,
          "score2": 2
        },
        {
          "date": "2014-05-03",
          "team1": {
            "key": "frankfurt",
            "name": "Eintracht Frankfurt",
            "code": "FFM"
          },
          "team2": {
            "key": "leverkusen",
            "name": "Bayer 04 Leverkusen",
            "code": "B04"
          },
          "score1": 0,
          "score2": 2
        },
        {
          "date": "2014-05-03",
          "team1": {
            "key": "nuernberg",
            "name": "1. FC Nürnberg",
            "code": "FCN"
          },
          "team2": {
            "key": "hannover",
            "name": "Hannover 96",
            "code": "H96"
          },
          "score1": 0,
          "score2": 2
        },
        {
          "date": "2014-05-03",
          "team1": {
            "key": "stuttgart",
            "name": "Stuttgart",
            "code": "VFB"
          },
          "team2": {
            "key": "wolfsburg",
            "name": "VfL Wolfsburg",
            "code": "WOB"
          },
          "score1": 1,
          "score2": 2
        },
        {
          "date": "2014-05-03",
          "team1": {
            "key": "dortmund",
            "name": "Borussia Dortmund",
            "code": "BVB"
          },
          "team2": {
            "key": "hoffenheim",
            "name": "1899 Hoffenheim",
            "code": "HOF"
          },
          "score1": 3,
          "score2": 2
        },
        {
          "date": "2014-05-03",
          "team1": {
            "key": "mgladbach",
            "name": "Borussia M'gladbach",
            "code": "BMG"
          },
          "team2": {
            "key": "mainz",
            "name": "1. FSV Mainz 05",
            "code": "M05"
          },
          "score1": 3,
          "score2": 1
        },
        {
          "date": "2014-05-03",
          "team1": {
            "key": "braunschweig",
            "name": "Eintr. Braunschweig",
            "code": "EBS"
          },
          "team2": {
            "key": "augsburg",
            "name": "FC Augsburg",
            "code": "FCA"
          },
          "score1": 0,
          "score2": 1
        },
        {
          "date": "2014-05-03",
          "team1": {
            "key": "bremen",
            "name": "Werder Bremen",
            "code": "BRE"
          },
          "team2": {
            "key": "herthabsc",
            "name": "Hertha BSC",
            "code": "BSC"
          },
          "score1": 2,
          "score2": 0
        }
      ]
    },
    {
      "name": "34. Spieltag",
      "matches": [
        {
          "date": "2014-05-10",
          "team1": {
            "key": "herthabsc",
            "name": "Hertha BSC",
            "code": "BSC"
          },
          "team2": {
            "key": "dortmund",
            "name": "Borussia Dortmund",
            "code": "BVB"
          },
          "score1": 0,
          "score2": 4
        },
        {
          "date": "2014-05-10",
          "team1": {
            "key": "wolfsburg",
            "name": "VfL Wolfsburg",
            "code": "WOB"
          },
          "team2": {
            "key": "mgladbach",
            "name": "Borussia M'gladbach",
            "code": "BMG"
          },
          "score1": 3,
          "score2": 1
        },
        {
          "date": "2014-05-10",
          "team1": {
            "key": "bayern",
            "name": "FC Bayern München",
            "code": "FCB"
          },
          "team2": {
            "key": "stuttgart",
            "name": "Stuttgart",
            "code": "VFB"
          },
          "score1": 1,
          "score2": 0
        },
        {
          "date": "2014-05-10",
          "team1": {
            "key": "leverkusen",
            "name": "Bayer 04 Leverkusen",
            "code": "B04"
          },
          "team2": {
            "key": "bremen",
            "name": "Werder Bremen",
            "code": "BRE"
          },
          "score1": 2,
          "score2": 1
        },
        {
          "date": "2014-05-10",
          "team1": {
            "key": "schalke",
            "name": "Schalke 04",
            "code": "S04"
          },
          "team2": {
            "key": "nuernberg",
            "name": "1. FC Nürnberg",
            "code": "FCN"
          },
          "score1": 4,
          "score2": 1
        },
        {
          "date": "2014-05-10",
          "team1": {
            "key": "hannover",
            "name": "Hannover 96",
            "code": "H96"
          },
          "team2": {
            "key": "freiburg",
            "name": "SC Freiburg",
            "code": "SCF"
          },
          "score1": 3,
          "score2": 2
        },
        {
          "date": "2014-05-10",
          "team1": {
            "key": "mainz",
            "name": "1. FSV Mainz 05",
            "code": "M05"
          },
          "team2": {
            "key": "hsv",
            "name": "Hamburger SV",
            "code": "HSV"
          },
          "score1": 3,
          "score2": 2
        },
        {
          "date": "2014-05-10",
          "team1": {
            "key": "hoffenheim",
            "name": "1899 Hoffenheim",
            "code": "HOF"
          },
          "team2": {
            "key": "braunschweig",
            "name": "Eintr. Braunschweig",
            "code": "EBS"
          },
          "score1": 3,
          "score2": 1
        },
        {
          "date": "2014-05-10",
          "team1": {
            "key": "augsburg",
            "name": "FC Augsburg",
            "code": "FCA"
          },
          "team2": {
            "key": "frankfurt",
            "name": "Eintracht Frankfurt",
            "code": "FFM"
          },
          "score1": 2,
          "score2": 1
        }
      ]
    }
  ]
};

_.forEach(data.rounds, (round, index) => {
  const roundNumber = index + 1;

  _.forEach(round.matches, (match) => {
    match.roundNumber = roundNumber;
    match.team1.score = match.score1;
    match.team2.score = match.score2;

    delete match.score1;
    delete match.score2;
  });
});

function createTeamBlank(teamName) {
  return {
    name: teamName,
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 0
  };
}

function calculateStandings(numLastRound) {
  var teams = {};

  _(data.rounds).take(numLastRound).map('matches').flatten().forEach((match) => {
    const homeTeamKey = match.team1.key;
    const guestTeamKey = match.team2.key;
    const homeTeamScore = match.team1.score;
    const guestTeamScore = match.team2.score;

    teams[homeTeamKey] ? _.noop() : teams[homeTeamKey] = createTeamBlank(homeTeamKey);
    teams[guestTeamKey] ? _.noop() : teams[guestTeamKey] = createTeamBlank(guestTeamKey);

    teams[homeTeamKey].played++;
    teams[guestTeamKey].played++;

    teams[homeTeamKey].goalsFor = teams[homeTeamKey].goalsFor + match.team1.score;
    teams[guestTeamKey].goalsFor = teams[guestTeamKey].goalsFor + match.team2.score;

    teams[homeTeamKey].goalsAgainst = teams[homeTeamKey].goalsAgainst + match.team2.score;
    teams[guestTeamKey].goalsAgainst = teams[guestTeamKey].goalsAgainst + match.team1.score;

    teams[homeTeamKey].goalDifference = teams[homeTeamKey].goalsFor - teams[homeTeamKey].goalsAgainst;
    teams[guestTeamKey].goalDifference = teams[guestTeamKey].goalsFor - teams[guestTeamKey].goalsAgainst;

    if (homeTeamScore > guestTeamScore) {
      teams[homeTeamKey].points = teams[homeTeamKey].points + 3;

      teams[homeTeamKey].won++;
      teams[guestTeamKey].lost++;
    } else if (homeTeamScore < guestTeamScore) {
      teams[guestTeamKey].points = teams[guestTeamKey].points + 3;

      teams[guestTeamKey].won++;
      teams[homeTeamKey].lost++;
    } else {
      teams[homeTeamKey].points = teams[homeTeamKey].points + 1;
      teams[guestTeamKey].points = teams[guestTeamKey].points + 1;

      teams[homeTeamKey].drawn++;
      teams[guestTeamKey].drawn++;
    }
  });

  return _(teams).orderBy(['points', 'goalDifference', 'goalsFor'], ['desc', 'desc', 'desc'])
    .map((teamStats, index) => {
      return _.assignIn(teamStats, { position: index + 1 });
    }).value();
}

function recalculateStandings(state, round) {
  let newStandings = calculateStandings(round);
  const currentSelectedTeam = _.find(state.teamsStats, 'selected');

  let newState = {
    teamsStats: newStandings,
    rounds: _.take(data.rounds, round)
  };

  if (currentSelectedTeam) {
    console.log(currentSelectedTeam);
    newState.teamsStats = calculateResultsOfTeam(newState, currentSelectedTeam.name);
  }

  newState.teamsStats = _.map(state.teamsStats, (teamStats) => {
    const teamName = teamStats.name;
    return _.merge(teamStats, _.find(newState.teamsStats, { name: teamName }));
  });

  return newState;
}

function calculateResultsOfTeam(state, targetTeamName) {
  const enemyTeamsNames = _.map(state.teamsStats, 'name');

  const matchesWithTargetTeam = _(state.rounds).map('matches').flatten().value().filter((match) => {
    return _.intersection([match.team1.key, match.team2.key], [targetTeamName]).length;
  });

  const teamsStatsCopy = state.teamsStats.slice(0);
  const currentSelectedTeam = _.find(teamsStatsCopy, 'selected');

  if (currentSelectedTeam) {
    currentSelectedTeam.selected = false;
  }

  const newSelectedTeam = _.find(teamsStatsCopy, { name: targetTeamName });
  let isReset = false;

  if (currentSelectedTeam && currentSelectedTeam === newSelectedTeam) {
    newSelectedTeam.selected = false;
    isReset = true;
  } else {
    newSelectedTeam.selected = true;
  }

  _.map(enemyTeamsNames, (enemyTeamName, index) => {
    state.teamsStats[index].additionStatsScore = null;
    state.teamsStats[index].additionStatsGame1 = null;
    state.teamsStats[index].additionStatsGame2 = null;

    if (enemyTeamName === targetTeamName || isReset) {
      return false;
    }

    const amongTeamsMatches = _.filter(matchesWithTargetTeam, (game) => {
      return _.intersection([game.team1.key, game.team2.key], [enemyTeamName, targetTeamName]).length === 2
    });

    [ teamsStatsCopy[index].additionStatsGame1, teamsStatsCopy[index].additionStatsGame2 ]
      = _.take(amongTeamsMatches.concat(_.times(2, _.constant(null))), 2);


    _.forEach(amongTeamsMatches, (game) => {
      const teamsArray =[ game.team1, game.team2 ];

      const enemyTeam = _.find(teamsArray, { key: enemyTeamName });
      const targetTeam = _.pull(teamsArray, enemyTeam)[0];

      if (targetTeam.score > enemyTeam.score) {
        state.teamsStats[index].additionStatsScore += 3;
        game.result = 'win';
      } else if (targetTeam.score === enemyTeam.score) {
        state.teamsStats[index].additionStatsScore += 1;
        game.result = 'draw';
      } else {
        state.teamsStats[index].additionStatsScore += 0;
        game.result = 'lose';
      }
    });
  });

  return teamsStatsCopy;
}

const initialState = {
  teamsStats: calculateStandings(data.rounds.length),
  rounds: data.rounds,
  allRoundsLength: data.rounds.length
};

export default function tableRow(state = initialState, action) {
  switch (action.type) {

    case types.TEAM_NAME_CLICK:
      return {
        ...state,
        teamsStats: calculateResultsOfTeam(state, action.name)
      };

    case types.RECALCULATE_STANDINGS: {
      const { teamsStats, rounds } = recalculateStandings(state, action.round);

      return {
        ...state,
        teamsStats,
        rounds
      };
    }

    default:
      return state;
  }
}
