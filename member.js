function skillsMember()
{
    var member = {
        name: "John Doe",
        age: 30,
        height: 6,
        weight: 200,
        skills: ["JavaScript", "HTML", "CSS"],
        address: {
            street: "50 Main St.",
            city: "Boston",
            state: "MA"
        },
        getBirthYear: function()
        {
            return 2017 - this.age;
        }
    };
    console.log(member);
    console.log(member.name);
    console.log(member.age);
    console.log(member.skills);
    console.log(member.skills[0]);
    console.log(member.address);
    console.log(member.address.city);
    console.log(member.getBirthYear());
}