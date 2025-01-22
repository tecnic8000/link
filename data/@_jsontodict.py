import re
import json

with open("test.js", "r") as js_file: # Step 1: Read the JavaScript file
    content = js_file.read()

# Step 2: Extract the JSON data. Remove the variable assignment (e.g., `const jsonData =`)
json_match = re.search(r"=\s*(\[.*\]);", content, re.DOTALL)
if not json_match:
    raise ValueError("No valid JSON array found in the .js file.")
json_data = json_match.group()
#print(json_data)
print('DONE----- 1')
# Step 3: Parse the JSON data into a Python object
try: 
    data = json.loads(json_data)
    print(data)
except json.JSONDecodeError as e:
    print(e)
print('DONE----- 2')
# Step 4: Write the data to a new Python file
#python_code = f"data = {json.dumps(data, indent=4)}\n"

##    py_file.write(python_code)

#print("Conversion completed! The Python file has been created.")