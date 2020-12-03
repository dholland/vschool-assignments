Assignment: https://coursework.vschool.io/ugly-things/
API Docs: https://coursework.vschool.io/ugly-things-api-documentation/

- Must have Submit button that submits the data
- Must display a list of posted images with their associated titles and descriptions
- Must store the array of ugly thing objects in the Context store
- Must be able to delete an ugly thing
- Must be able to edit an ugly thing
- Must make all requests via the Ugly Things API

**Optional**

- Have 3 images horizontally on each row
- Allow each image to have one or more user-submitted comments
- Allow the ability to delete specific comments

**Components:**

1. Context

   - holds state / array of images
   - holds save new image function
   - holds load images function

2. Form

Input fields // controled components

- url
- title
- description
- Button

3. List

   - displays all saved images

4. Comments

- Description, save, delete

Payload

```json
{
	"title": "Title here",
	"description": "Description here",
	"imgUrl": "http://www.example.com/some-link-to-a-cool-photo.jpg"
}
```
