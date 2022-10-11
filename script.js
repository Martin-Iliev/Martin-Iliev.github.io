var items = [
  {
  img:"https://user-images.githubusercontent.com/89903727/193781724-77d45706-4bff-4a99-bf61-917e782151ef.jpg",
  href:"http://www.pathofexile.com/forum/view-thread/2976624",
    },
  {
  img:"https://user-images.githubusercontent.com/89903727/193781723-fdd51080-54d2-4507-9abc-ed2ffb9d478e.jpg",
  href:"http://www.pathofexile.com/forum/view-thread/3261066",
    },
  {
  img:"https://user-images.githubusercontent.com/89903727/193781719-90bf3e9c-b14c-4b07-a41a-525a81451e2f.png",
  href:"http://www.pathofexile.com/forum/view-thread/3229979",
    },
  {
 img:"https://user-images.githubusercontent.com/89903727/193781714-f85cc1a3-6d69-4d7b-8174-30bf226632d3.jpg",
  href:"https://www.youtube.com/watch?v=kY3u4u1fMLA",
    },
  {
 img:"https://user-images.githubusercontent.com/89903727/193781711-6f0fa7ba-5cfa-4006-92bf-ea1332022883.jpg",
  href:"http://www.pathofexile.com/forum/view-thread/3230482",
    },
];
const image = document.getElementById("build");
function random(){
  document.getElementById('cars').value = '';
    $(".car").each(function (index){

        var car = items[Math.floor(Math.random() * items.length)];
      var img = car.img;
      var build = car.href;
        $(this).attr('src', img);
      currentCar = img;
      currentBuild = build;
      document.getElementById("build").href=build;
    });


  console.log(currentCar); 
  console.log(currentBuild);
}
var $button = document.querySelector('.button');