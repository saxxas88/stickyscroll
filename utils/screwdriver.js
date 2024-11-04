
export const useEffect = async(element, timeout = Infinity) => {
     let startTime = Date.now();
    return new Promise((resolve) => {
      const intervalId = setInterval(() => {
        if (document.querySelector(element)) {
          clearInterval(intervalId);
          resolve(true);
        } else if (Date.now() - startTime >= timeout * 1000) {
          clearInterval(intervalId);
          resolve(false);
        }
      }, 250);
    });
  }	