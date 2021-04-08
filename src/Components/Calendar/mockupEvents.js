import Moment from "moment";

const events = [
    {
        title: "Walk the Dog",
        start: Moment("2021-04-05"),
        end: Moment("2021-04-05")
    },
    {
        title: "Wash the dog",
        start: Moment("2021-04-08"),
        end: Moment("2021-04-08")
    },
    {
        title: "Pet Dog",
        start: Moment("2021-04-07"),
        end: Moment("2021-04-07")
    },
    {
        title: "Brush dog",
        start: Moment("2021-04-08"),
        end: Moment("2021-04-08")
    },
    {
        title:"Read a story to the dog",
        start: Moment("2021-04-09"),
        end: Moment("2021-04-09")
    },
    {
        title:"Hug dog",
        start: Moment("2021-04-10"),
        end: Moment("2021-04-10")
    },
]

export default events;


///extracted debugging code from "Calendar":


const mockUserData =  [
    {
      id:"a",
      name: "Yonni",
      avatar: "./user1.png",
      tasks: [
          {
          title:"Swipe Living room",
          start: Moment("07/05/2021 10:00PM", "DD/MM/YYYY h:mmA"),
          end: Moment("07/05/2021 10:00PM", "DD/MM/YYYY h:mmA"),
        //   resources:[{taskId: "a", userId: "a", assignerId: "b", isCompeleted: false}],
        },
          {
          title:"Wash dishes",
          start: Moment("08/05/2021 11:20PM", "DD/MM/YYYY h:mmA"),
          end: Moment("08/05/2021 11:20PM", "DD/MM/YYYY h:mmA"),
        //   resources:[{taskId: "b", userId: "a", assignerId: "c", isCompeleted: true}],
        }
      ],
    },
    {
      id:"b",
      name: "Noa",
      avatar: "./user2.png",
      tasks: [
          {
              "title": "Clean Fridge",
              "start": Moment("02/05/2021 17:30PM", "DD/MM/YYYY h:mmA"),
              "end": Moment("02/05/2021 17:30PM", "DD/MM/YYYY h:mmA"),
            //   resources:[{taskId: "c", userId: "b", assignerId: "c", isCompeleted: true}],
          },
          {
              "title": "Walk dog",
              "start": Moment("04/05/2021 14:30PM", "DD/MM/YYYY h:mmA"),
              "end": Moment("04/05/2021 14:30PM", "DD/MM/YYYY h:mmA"),
            //   resources:[{taskId: "d", userId: "b", assignerId: "e", isCompeleted: true}],
          }
      ],
    },
    {
      id:"c",
      name: "Mary",
      avatar: "./user3.png",
      tasks: [
        {
          "title": "Hang laundry",
          "start": Moment("01/05/2021 13:30PM", "DD/MM/YYYY h:mmA"),
          "end": Moment("01/05/2021 13:30PM", "DD/MM/YYYY h:mmA"),
        //   resources:[{taskId: "e", userId: "c", assignerId: "d", isCompeleted: false}],
      }
      ],
    },
    {
      id:"d",
      name: "Daniel",
      avatar: "./user4.png",
      tasks: [
        {
          "title": "Wash floor",
          "start": Moment("11/04/2021 17:30PM", "DD/MM/YYYY h:mmA"),
          "end": Moment("11/04/2021 17:30PM", "DD/MM/YYYY h:mmA"),
        //   resources:[{taskId: "i", userId: "d", assignerId: "c", isCompeleted: true}],
      },
      {
          "title": "Walk cat",
          "start": Moment("03/04/2021 14:30PM", "DD/MM/YYYY h:mmA"),
          "end": Moment("03/04/2021 14:30PM", "DD/MM/YYYY h:mmA"),
        //   resources:[{taskId: "j", userId: "d", assignerId: "e", isCompeleted: true}],
      },
      {
          "title": "Scrub stove",
          "start": Moment("08/05/2021 10:30PM", "DD/MM/YYYY h:mmA"),
          "end": Moment("08/05/2021 10:30PM", "DD/MM/YYYY h:mmA"),
        //   resources:[{taskId: "k", userId: "d", assignerId: "a", isCompeleted: true}],
      }
      ],
    },
    {
      id:"e",
      name: "Roy",
      avatar: "./user5.png",
      tasks: [
        {
          "title": "Wash floor",
          "start": Moment("02/04/2021 17:30PM", "DD/MM/YYYY h:mmA"),
          "end": Moment("02/04/2021 17:30PM", "DD/MM/YYYY h:mmA"),
        //   resources:[{taskId: "l", userId: "e", assignerId: "c", isCompeleted: true}],
      },
      {
          "title": "Walk cat",
          "start": Moment("03/04/2021 14:30PM", "DD/MM/YYYY h:mmA"),
          "end": Moment("03/04/2021 14:30PM", "DD/MM/YYYY h:mmA"),
        //   resources:[{taskId: "m", userId: "e", assignerId: "e", isCompeleted: true}],
      },
      {
          "title": "Scrub stove",
          "start": Moment("03/04/2021 10:30PM", "DD/MM/YYYY h:mmA"),
          "end": Moment("03/04/2021 10:30PM", "DD/MM/YYYY h:mmA"),
        //   resources:[{taskId: "n", userId: "e", assignerId: "a", isCompeleted: true}],
      }
      ],
    },
  ];

//let tasksArr = [];

const stamEvents = [
    {
      'title': 'Test Event A',
      'allDay': true,
      'start': Moment("12/04/2021 14:30PM", "DD/MM/YYYY h:mmA"),
      'end': Moment("12/04/2021 14:30PM", "DD/MM/YYYY h:mmA")
    },
    {
      'title': 'Test Event B',
      'start': Moment("11/04/2021 14:30PM", "DD/MM/YYYY h:mmA"),
      'end': Moment("11/04/2021 14:30PM", "DD/MM/YYYY h:mmA")
    }];


const stamEvents2 = [
    {
        title:"Swipe Living room",
        start: Moment("07/05/2021 10:00PM", "DD/MM/YYYY h:mmA"),
        end: Moment("07/05/2021 10:00PM", "DD/MM/YYYY h:mmA"),
      //   resources:[{taskId: "a", userId: "a", assignerId: "b", isCompeleted: false}],
      },
        {
        title:"Wash dishes",
        start: Moment("08/05/2021 11:20PM", "DD/MM/YYYY h:mmA"),
        end: Moment("08/05/2021 11:20PM", "DD/MM/YYYY h:mmA"),
      //   resources:[{taskId: "b", userId: "a", assignerId: "c", isCompeleted: true}],
      },
      {
        "title": "Clean Fridge",
        "start": Moment("02/05/2021 17:30PM", "DD/MM/YYYY h:mmA"),
        "end": Moment("02/05/2021 17:30PM", "DD/MM/YYYY h:mmA"),
      //   resources:[{taskId: "c", userId: "b", assignerId: "c", isCompeleted: true}],
    },
    {
        "title": "Walk dog",
        "start": Moment("04/05/2021 14:30PM", "DD/MM/YYYY h:mmA"),
        "end": Moment("04/05/2021 14:30PM", "DD/MM/YYYY h:mmA"),
      //   resources:[{taskId: "d", userId: "b", assignerId: "e", isCompeleted: true}],
    },
    {
        "title": "Hang laundry",
        "start": Moment("01/05/2021 13:30PM", "DD/MM/YYYY h:mmA"),
        "end": Moment("01/05/2021 13:30PM", "DD/MM/YYYY h:mmA"),
      //   resources:[{taskId: "e", userId: "c", assignerId: "d", isCompeleted: false}],
    },
    {
        "title": "Wash floor",
        "start": Moment("11/04/2021 17:30PM", "DD/MM/YYYY h:mmA"),
        "end": Moment("11/04/2021 17:30PM", "DD/MM/YYYY h:mmA"),
      //   resources:[{taskId: "i", userId: "d", assignerId: "c", isCompeleted: true}],
    },
    {
        "title": "Walk cat",
        "start": Moment("03/04/2021 14:30PM", "DD/MM/YYYY h:mmA"),
        "end": Moment("03/04/2021 14:30PM", "DD/MM/YYYY h:mmA"),
      //   resources:[{taskId: "j", userId: "d", assignerId: "e", isCompeleted: true}],
    },
    {
        "title": "Scrub stove",
        "start": Moment("10/04/2021 10:30PM", "DD/MM/YYYY h:mmA"),
        "end": Moment("10/04/2021 10:30PM", "DD/MM/YYYY h:mmA"),
      //   resources:[{taskId: "k", userId: "d", assignerId: "a", isCompeleted: true}],
    }
    
];