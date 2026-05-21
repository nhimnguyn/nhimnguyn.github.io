import random
from PIL import Image

def generate_place_images():
    place_ids = [
        "austin", "dallas", "fort-worth", "houston", "new-york", 
        "toronto", "elora", "vancouver", "niagara-falls", "muskoka", 
        "kawartha-lakes", "algonquin-park", "montreal", "barrie", 
        "blue-mountains", "tobermory", "brantford", "kingston", 
        "gibson", "sechelt", "hanoi", "saigon", "danang", "nha-trang", 
        "hoi-an", "quang-ngai", "quy-nhon", "pleiku", "ca-mau", 
        "rach-gia", "chau-doc", "vung-tau", "phan-thiet", "bac-ninh", 
        "bac-giang", "moc-chau", "ta-xua", "sapa", "lao-cai", "hue", 
        "hai-phong", "ha-long", "cat-ba", "kon-tum", "dak-lak", "ninh-binh"
    ]

    for place_id in place_ids:
        filename = f"{place_id}.webp"
        
        # Generate a random RGB color
        color = (random.randint(0, 255), random.randint(0, 255), random.randint(0, 255))
        
        # Create a 512x512 image filled with the generated color
        img = Image.new("RGB", (512, 512), color)
        
        # Save the image in the current working directory
        img.save(filename, "WEBP")
        print(f"Saved: {filename}")

if __name__ == "__main__":
    generate_place_images()