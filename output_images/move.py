import os
import re
import shutil

path_without_mask = "/home/rochansingh/Documents/Project/output_images/mydz_files/15"
path_with_mask = "/home/rochansingh/Documents/Project/output_images/mydz_mask_files/15"

target_without_mask = (
    "/home/rochansingh/Documents/Project/tiles_last_layer/without_mask"
)
target_with_mask = "/home/rochansingh/Documents/Project/tiles_last_layer/with_mask"

for files in os.listdir(path_with_mask):

    shutil.copy(path_with_mask + "/" + files, target_with_mask)
