export const postData = [
  {
    id: 1,
    userName: "Theresa Webb",
    timeStamp: "5mins",
    postText:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    commentsCount: 3,
    comments: [
      {
        id: 2,
        parentId: 1,
        userName: "Harris  Webb",
        timeStamp: "10mins",
        commentText: "hello man !!",
        children: [],
      },
      {
        id: 3,
        parentId: 1,
        userName: "Harris  Webb",
        timeStamp: "10mins",
        commentText: "hello man !!",
        children: [
          {
            id: 4,
            parentId: 3,
            userName: "Harris  Webb",
            timeStamp: "10mins",
            commentText: "hello man !!",
            children: [
              {
                id: 5,
                parentId: 6,
                userName: "Harris  Webb",
                timeStamp: "10mins",
                commentText: "hello man !!",
                children: [
                  {
                    id: 4,
                    parentId: 3,
                    userName: "Harris  Webb",
                    timeStamp: "10mins",
                    commentText: "hello man !!",
                    children: [
                      {
                        id: 7,
                        parentId: 4,
                        userName: "Harris  Webb",
                        timeStamp: "10mins",
                        commentText: "hello man !!",
                        children: [
                          {
                            id: 8,
                            parentId: 7,
                            userName: "Harris  Webb",
                            timeStamp: "10mins",
                            commentText: "hello man !!",
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    userName: "No BOI",
    timeStamp: "5mins",
    postText:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do veniam consequat sunt nostrud amet.",
    commentsCount: 0,
    comments: [],
  },
];
