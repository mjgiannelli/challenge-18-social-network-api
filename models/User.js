const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: () => Promise.resolve(false),
            message: 'Email validation failed'
        }
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
)

// create the User model
const User = model('User', UserSchema);

// get total count of friends
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length
})

// run email validator and catch err and send message
user.validate().catch(error => {
    assert.equal(error.errors['email'].message, 'Email validation failed');
});