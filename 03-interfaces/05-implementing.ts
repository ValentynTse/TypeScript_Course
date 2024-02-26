interface Report {
   name: string;
   build: () => string;
}

// implements - ключове слово для реалізації інтерфейсу у класі
// якщо члени інтерфейсу не будуть визначені в класі, компілятор видасть помилку
class DailyReport implements Report {
   body: ReportBody;
   type: string;
   url: string;
   toJSON() {
      throw new Error("Method not implemented.");
   }
   name: string = 'Daily Report';

   build(): string {
      return 'some daili report data';
   }
}

class WeaklyReport implements Report {
   body: ReportBody;
   type: string;
   url: string;
   toJSON() {
      throw new Error("Method not implemented.");
   }
   name: string = 'Weakly Report';

   build(): string {
      return 'some weakly report data';
   }
}

const r1: Report = new DailyReport();
const r2: Report = new WeaklyReport();

console.log(r1.build());
console.log(r2.build());
