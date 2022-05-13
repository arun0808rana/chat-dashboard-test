import React from "react";
import Wrapper from "./ChatMisc.style";
import ProfilePic from "../../../../assets/photo-1517841905240-472988babdf9.avif";
import FilesIcon from "../../../../assets/files.svg";
import LinksIcon from "../../../../assets/akar-icons_link-chain.svg";
import RightChevron from "../../../../assets/chevronright.svg";
import VideoIcon from "../../../../assets/bi_camera-video.svg";
import ImagesIcon from "../../../../assets/bi_file-image.svg";
import DocumentIcon from "../../../../assets/fluent_document-16-regular.svg";
import OtherFilesIcon from "../../../../assets/lucide_binary.svg";

function ChatMisc() {
  return (
    <Wrapper>
      <div className="misc">
        <div className="misc-upper-part">
          <div className="misc-upper-part-heading">Mansi's Details</div>
          <div className="misc-upper-part-dp">
            <img src={ProfilePic} alt="dp" className="misc-upper-part-dp-img" />
          </div>
          <div className="misc-upper-part-name">Mansi Rathore</div>
          <div className="misc-upper-part-contact-number">
            <div className="misc-upper-part-contact-number-text">
              9845989418
            </div>
            <div className="misc-upper-part-contact-number-copy-icon"></div>
          </div>
          <div className="misc-upper-part-file-headings">
            <div className="misc-upper-part-file-headings-all-files-box">
              <div className="misc-upper-part-file-headings-all-files-box-icon">
                <img src={FilesIcon} alt="file icon" />
              </div>
              <div className="misc-upper-part-file-headings-all-files-box-rhs">
                <div className="misc-upper-part-file-headings-all-files-box-text">
                  All Files
                </div>
                <div className="misc-upper-part-file-headings-all-files-box-filenumber">
                  271
                </div>
              </div>
            </div>
            <div className="misc-upper-part-file-headings-links-box">
              <div className="misc-upper-part-file-headings-links-box-icon">
                <img src={LinksIcon} alt="link icon" />
              </div>
              <div className="misc-upper-part-file-headings-links-box-rhs">
                <div className="misc-upper-part-file-headings-links-box-text">
                  All Links
                </div>
                <div className="misc-upper-part-file-headings-links-box-filenumber">
                  141
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="misc-lower-part">
          <div className="misc-lower-part-heading"></div>
          <div className="misc-lower-part-files">
            {["Documents", "Images", "Videos", "Others"].map(
              (fileType, index) => {
                return (
                  <div
                    className="misc-lower-part-files-filetype"
                    key={`filetypeinmisc-${index}`}
                  >
                    <div
                      className={
                        "misc-lower-part-files-filetype-lhs " +
                        (fileType === "Documents"
                          ? "document"
                          : fileType === "Images"
                          ? "images"
                          : fileType === "Videos"
                          ? "video"
                          : "others")
                      }
                    >
                      <img
                        src={
                          fileType === "Documents"
                            ? DocumentIcon
                            : fileType === "Images"
                            ? ImagesIcon
                            : fileType === "Videos"
                            ? VideoIcon
                            : OtherFilesIcon
                        }
                        alt="file type icon"
                      />
                    </div>
                    <div className="misc-lower-part-files-filetype-middle">
                      <div className="misc-lower-part-files-filetype-middle-heading">
                        {fileType}
                      </div>
                      <div className="misc-lower-part-files-filetype-middle-details">
                        150 files, 258MB
                      </div>
                    </div>
                    <div className="misc-lower-part-files-filetype-rhs">
                      <img src={RightChevron} alt="right arrow" />
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default ChatMisc;
