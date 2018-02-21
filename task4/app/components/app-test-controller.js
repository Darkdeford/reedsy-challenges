import moment from 'moment';

export default class AppTestController {
    $onInit() {
        const timestampValue = moment(this.ngModel);
        this.months = moment.monthsShort().map((name, index) => {
            return {
                id: index + 1,
                name
            }
        });

        this.currentDate = {
            day: timestampValue.date(),
            month: timestampValue.month() + 1,
            year: timestampValue.year()
        };
    }

    onChange() {
        this.setProperDayValue();
        this.setNewTimestampValue();
    }

    setNewTimestampValue() {
        this.timestamp.$setViewValue(new Date(`${this.currentDate.year}-${this.currentDate.month}-${this.currentDate.day}`).getTime());
    }


    setProperDayValue() {
        const lastMonthDay = moment(new Date(`${this.currentDate.year}-${this.currentDate.month}`).getTime()).daysInMonth();
        if (this.currentDate.day > lastMonthDay) {
            this.currentDate.day = lastMonthDay;
        }
    }

    getMonthDays() {
        return new Array(moment(this.ngModel).daysInMonth());
    }
}
