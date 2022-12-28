export const formatValueMinxin = {
    methods: {
      toTimeStamp(time: number, type: string) {
        const date = new Date(time);
        const start = new Date(
          `${date.getMonth() + 1} ${date.getDate()} ${date.getFullYear()}`
        );
        const end = new Date(
          `${
            date.getMonth() + 1
          } ${date.getDate()} ${date.getFullYear()} 23:59:59`
        );
        const startDateConvert = Math.floor(start.getTime() / 1000);
        const endDateConvert = Math.floor(end.getTime() / 1000);
        let result;
        if (type == "start") result = startDateConvert;
        if (type == "end") result = endDateConvert;
        if (type == "between") result = `${startDateConvert}|${endDateConvert}`;
        if (!type) result = Math.floor(time / 1000);
        return result;
      },
  
      formatPrice(value: number) {
        const val = (value / 1).toFixed().replace(".", ",");
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      },
  
      getPrice(value: number, currency: string) {
        return `${this.formatPrice(value)} ${
          currency == "VND" ? "đ" : currency == "JPY" ? "¥" : currency
        }`;
      },
  
      getVolume(value: number) {
        return value / 1000000;
      },
  
      checkNumber(value: any) {
        return /^\d*$/.test(value);
      },
  
      checkPhoneNumber(str: any) {
        const check = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,4}[-\s\.]?[0-9]{0,3}$/im; // eslint-disable-line
  
        const result = check.test(str);
        return result;
      },
  
      checkCharactersString(value: any) {
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; // eslint-disable-line
        return specialChars.test(value);
      },
  
      formatTime(timeStamp: number) {
        const date = new Date(timeStamp * 1000);
        const years = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hrs = date.getHours();
        const min = date.getMinutes();
        const sec = date.getSeconds();
  
        let gethrs;
        let getmin;
        let getsec;
  
        if (hrs < 10) {
          gethrs = `0${hrs}`;
        } else {
          gethrs = hrs;
        }
        if (min < 10) {
          getmin = `0${min}`;
        } else {
          getmin = min;
        }
        if (sec < 10) {
          getsec = `0${sec}`;
        } else {
          getsec = sec;
        }
  
        const time = `${day}-${month}-${years}  ,  ${gethrs}:${getmin}:${getsec}`;
        return time;
      },
    },
  };
  