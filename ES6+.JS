class Statistics {
    constructor(data) {
      this.data = data;
      this.sorted = this.classifyData();
    }
  
    classifyData() {
      return [...this.data].sort((a, b) => a - b);
    }
  

    // measures of central tendency

    mean() {
        let sum = this.data.reduce((number, value) => number + value, 0);
        return sum / this.data.length;
      }
    
    median() {
        let averageIndex = Math.floor(this.sorted.length / 2);
      
        switch (this.sorted.length % 2) {
          case 0:
            return (this.sorted[averageIndex - 1] + this.sorted[averageIndex]) / 2;
          case 1:
            return this.sorted[averageIndex];
          default:
            throw new Error("err");
        }
      }
  
    mode() {
      let popularityChart = new Map();
      this.data.forEach(value => {
        popularityChart.set(value, (popularityChart.get(value) || 0) + 1);
      });
      let mode;
      let highNumber = 0;
  
      for (const [value, frequency] of popularityChart.entries()) {
        if (frequency > highNumber) {
          highNumber = frequency;
          mode = value;
        }
      }
  
      return mode;
    }

    // measures of dispersion
  
    range() {
        return this.sorted[this.sorted.length - 1] - this.sorted[0];
      }
  
    variance() {
      const expectedValue = this.mean();
      const sumOfSquares = this.data.reduce((number, value) => number + Math.pow(value - expectedValue, 2), 0);
      return sumOfSquares / this.data.length;
    }
  
    standardDeviation() {
      return Math.sqrt(this.variance());
    }
  
    quartiles() {
      const q1Index = Math.floor(this.sorted.length / 4);
      const q2Index = Math.floor(this.sorted.length / 2);
      const q3Index = Math.floor((3 * this.sorted.length) / 4);
  
      return {
        q1: this.sorted[q1Index],
        q2: this.sorted[q2Index],
        q3: this.sorted[q3Index],
      };
    }
  
    interquartileRange() {
      const { q1, q3 } = this.quartiles();
      return q3 - q1;
    }
  }
  

  const data = [25, 17, 40, 63, 25, 54, 70, 100 ];
  const stats = new Statistics(data);
  
  console.log("Mean:", stats.mean());
  console.log("Median:", stats.median());
  console.log("Mode:", stats.mode());

  
  console.log("Range:", stats.range());
  console.log("Variance:", stats.variance());
  console.log("Standard Deviation:", stats.standardDeviation());
  console.log("Quartiles:", stats.quartiles());
  console.log("Interquartile Range:", stats.interquartileRange());