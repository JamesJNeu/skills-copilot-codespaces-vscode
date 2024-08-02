function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 30,
        skills: ['JavaScript', 'NodeJS', 'ReactJS'],
        // Method
        getSkills: function() {
            return this.skills;
        }
    };
    return member;
}