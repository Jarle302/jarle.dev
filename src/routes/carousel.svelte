<script>function carouselState() {
    let indexCount = 0;
    function increment(arr) {
      if (arr) {
        if (indexCount >= arr.length - 1) {
          return (indexCount = 0);
        }
      }
      return indexCount++;
    }
    function decrement(arr) {
      if (arr) {
        if (indexCount === 0) {
          return (indexCount = arr.length - 1);
        }
      }
      return indexCount--;
    }
  
    function changeSlides(callback, arr) {
      arr[indexCount].classList.remove("active");
      callback(arr);
      arr[indexCount].classList.add("active");
    }
  
    return [increment, decrement, changeSlides];
  }
  </script>