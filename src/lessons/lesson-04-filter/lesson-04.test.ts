test("should take old men older then 90", () => {
    const ages = [18, 20, 22, 1, 100, 90, 14];

    const predicate = (age: number) => {
        return age > 90;
    }

    const oldAges = ages.filter(predicate);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);

})

test("should take courses chipper 160", () => {
    const courses = [
        {title: "CSS", price: 110},
        {title: "JS", price: 200},
        {title: "REACT", price: 150}
    ]

    const chipPredicate = (course: CourseType) => {
        return course.price < 160;
    }
    const chipCourse = courses.filter(chipPredicate);

    ////////// сокращенный синтаксис
    // const chipCourse = courses.filter(course => course.price < 160); //
    /////////

    expect(chipCourse.length).toBe(2);
    expect(chipCourse[0].title).toBe('CSS');
    expect(chipCourse[1].title).toBe('REACT');
})

test("get only completed tasks", () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Sold', isDone: false},
        {id: 4, title: 'Sugar', isDone: true}
    ]

    const completedTasks = tasks.filter( task => task.isDone)

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].id).toBe(2);
    expect(completedTasks[1].id).toBe(4);
})
