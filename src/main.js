let job;

const title = document.querySelector(".title");
const status = document.querySelector(".status");
const user = document.querySelector(".user");
const parsing = document.querySelector(".parsing");

const text = `<div class="flex flex-col items-center">
      <h2>Đang chờ kết nối!!!</h2>
      <div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
        <div class="flex animate-pulse space-x-4">
          <div class="size-10 rounded-full bg-gray-200"></div>
          <div class="flex-1 space-y-6 py-1">
            <div class="h-2 rounded bg-gray-200"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                <div class="col-span-1 h-2 rounded bg-gray-200"></div>
              </div>
              <div class="h-2 rounded bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>`;

fetch("https://jsonplaceholder.typicode.com/todos/1").then((data) => {
    // console.log("Data fetched");
    data.json().then((json) => {
        // console.log(json);
        title.textContent = json.title;
        status.textContent = json.completed? "Hoàn thành" : "Chưa hoàn thành";
        user.textContent = json.userId;
    }
    ).catch(() => {
        // console.log("Error parsing data");
        parsing.innerHTML = text;
    })
}).catch(() => {
    // console.log("Error fetching data");
    
})

console.log(job);
// console.log("End of script");