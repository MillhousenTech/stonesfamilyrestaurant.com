        var ETcurrentTime = moment().tz("America/New_York").format();
        var ETdayOfWeek = moment(ETcurrentTime).format('dddd');
        var ETtime = moment(ETcurrentTime).format('kk:mm:ss');
        var timeBetween = moment(ETcurrentTime).isBetween('09:30:00', '21:00:00');
        if (ETdayOfWeek == "Sunday" || "Monday" || "Tuesday") {
            var open = false;
        } else {
            if (timeBetween == true) {
                var open = true;
            } else {
                var open = false;
            }
        }

        if (open == true) {
            document.getElementById("openStatus").innerHTML = "We are currently open!";

        }
        if (open == false) {
            document.getElementById("openStatus").innerHTML = "We are currently closed.";

        }
